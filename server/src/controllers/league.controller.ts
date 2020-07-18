import { Request, Response } from "express";

import BaseController from "./base.controller";
import leagueModel from "../models/league.model";
import LeagueService from "../services/league.service";


const leagueService = new LeagueService(leagueModel);

class LeagueController extends BaseController {
  constructor(service: LeagueService) {
    super(service);
  }

  async getLeagueTeams(req: Request, res: Response) {
    return res.status(200).send(await this.service.getLeagueTeams(req.query));
  }
}

export default new LeagueController(leagueService);
