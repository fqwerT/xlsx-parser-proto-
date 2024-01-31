import { ParserModel } from "../models/parser-model";
import { Response } from "express";

interface ParserProps extends Request {
  file?: {
    buffer: Buffer;
  };
}

export class Parser {
  static async createJsonData(req: ParserProps, res:any) {
    try {
      const jsonData = await ParserModel.jsonParser(req.file.buffer);
      res.status(200).json(jsonData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
