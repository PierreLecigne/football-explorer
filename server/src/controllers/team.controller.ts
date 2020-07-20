import BaseController from "./base.controller";

import TeamService from "../services/team.service";
import teamModel from "../models/team.model";
import { Request, Response } from "express";

const teamService = new TeamService(teamModel);

class TeamController extends BaseController {
  constructor(service: TeamService) {
    super(service);
  }

  getTeam = async (req: Request, res: Response) => {
    try {
      const team = await this.service.getTeam(req.params);
      return res.status(200).send(team);
    } catch (e) {
      if (e.statusCode) {
        return res.status(e.statusCode).send(e);
      }
      return res.status(500).send(e);
    }
  }
}

export default new TeamController(teamService);
