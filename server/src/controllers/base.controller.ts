import { Request, Response } from "express";

import BaseService from "../services/base.service";

class BaseController {
  service;

  constructor(service) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response) {
    return res.status(200).send(await this.service.getAll(req.query));
  }
}

export default BaseController;
