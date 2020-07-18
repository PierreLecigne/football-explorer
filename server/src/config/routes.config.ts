import { Application } from "express";

import playerController from "../controllers/player.controller";
import teamController from "../controllers/team.controller";
import leagueController from "../controllers/league.controller";

export default (server: Application) => {
  server.get(`/api/player`, playerController.getAll);
  server.get(`/api/team`, teamController.getAll);
  server.get(`/api/league`, leagueController.getAll);
}
