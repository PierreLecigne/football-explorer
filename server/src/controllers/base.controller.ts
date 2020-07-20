import { Request, Response } from "express";

class BaseController {
  service: any;

  constructor(service: any) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const items = await this.service.getAll(req.query);
      return res.status(200).send(items);
    } catch (e) {
      if (e.statusCode) {
        return res.status(e.statusCode).send(e);
      }
      return res.status(500).send(e);
    }
  }
}

export default BaseController;
