import { Request, Response } from "express";

import BaseController from "./base.controller";
import leagueModel from "../models/league.model";
import LeagueService from "../services/league.service";


const leagueService = new LeagueService(leagueModel);

class LeagueController extends BaseController {
  constructor(service: LeagueService) {
    super(service);
  }

  getLeagueTeams = async (req: Request, res: Response) => {
    try {
      const teams = await this.service.getLeagueTeams(req.params);
      return res.status(200).send(teams);
    } catch (e) {
      if (e.statusCode) {
        return res.status(e.statusCode).send(e);
      }
      return res.status(500).send(e);
    }
  }
}

export default new LeagueController(leagueService);
