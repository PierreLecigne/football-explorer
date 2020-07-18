import { Model } from "mongoose";

import BaseService from "./base.service";
import { League } from "../models/league.model";

export default class LeagueService extends BaseService {
  constructor(model: Model<League>) {
    super(model);
  }

  async getLeagueTeams(query: any) {
    const leagueId = query.id;
  }
}
