import { Model, Types } from "mongoose";

import BaseService from "./base.service";
import { Team } from "../models/team.model";

export default class TeamService extends BaseService {
  constructor(model: Model<Team>) {
    super(model);
  }

  getTeam = async (params: any) => {
    const teamId = params.teamId;

    try {
      const items = await this.model.aggregate([
        {
          '$match': {
            '_id': Types.ObjectId(teamId)
          }
        }, {
          '$unwind': {
            'path': '$players',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$lookup': {
            'from': 'players',
            'localField': 'players',
            'foreignField': '_id',
            'as': 'player'
          }
        }, {
          '$unwind': {
            'path': '$player',
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$group': {
            '_id': '$_id',
            'name': {
              '$first': '$name'
            },
            'thumbnail': {
              '$first': '$thumbnail'
            },
            'players': {
              '$push': '$player'
            }
          }
        }
      ]);

      if (items.length <= 0) {
        throw {
          error: true,
          statusCode: 404,
          e: 'unknown Team ID'
        };
      }
      return {
        error: false,
        statusCode: 200,
        data: items[0],
        total: items.length
      };
    } catch(e) {
      console.error(e);
      throw e;
    }
  }
}
