import { Model } from "mongoose";

import BaseService from "./base.service";
import { Player } from "../models/player.model";

export default class PlayerService extends BaseService {
  constructor(model: Model<Player>) {
    super(model);
  }
}
