import BaseController from "./base.controller";

import TeamService from "../services/team.service";
import teamModel from "../models/team.model";

const teamService = new TeamService(teamModel);

class TeamController extends BaseController {
  constructor(service: TeamService) {
    super(service);
  }
}

export default new TeamController(teamService);
