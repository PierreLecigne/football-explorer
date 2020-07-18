import { Model } from "mongoose";

import BaseService from "./base.service";
import { Team } from "../models/team.model";

export default class TeamService extends BaseService {
  constructor(model: Model<Team>) {
    super(model);
  }
}
