import { Model, Types } from "mongoose";

import BaseService from "./base.service";
import { League } from "../models/league.model";

export default class LeagueService extends BaseService {
  constructor(model: Model<League>) {
    super(model);
  }

  getLeagueTeams = async (params: any) => {
    const leagueId = params.leagueId;

    try {
      const items = await this.model.aggregate([
        {
          '$match': {
            '_id': {
              '$eq': Types.ObjectId(leagueId)
            }
          }
        },
        {
          '$unwind': {
            'path': '$teams',
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$lookup': {
            'from': 'teams',
            'localField': 'teams',
            'foreignField': '_id',
            'as': 'team'
          }
        }, {
          '$project': {
            '_id': 0,
            'id': {
              '$arrayElemAt': [
                '$team._id', 0
              ]
            },
            'name': {
              '$arrayElemAt': [
                '$team.name', 0
              ]
            },
            'thumbnail': {
              '$arrayElemAt': [
                '$team.thumbnail', 0
              ]
            }
          }
        }
      ]);

      return {
        error: false,
        statusCode: 200,
        data: items,
        total: items.length
      };
    } catch(e) {
      console.error(e);
      throw e;
    }
  }
}
