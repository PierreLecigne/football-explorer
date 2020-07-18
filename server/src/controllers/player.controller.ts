import BaseController from "./base.controller";

import PlayerService from "../services/player.service";
import playerModel from "../models/player.model";

const playerService = new PlayerService(playerModel);

class PlayerController extends BaseController {
  constructor(service: PlayerService) {
    super(service);
  }
}

export default new PlayerController(playerService);
