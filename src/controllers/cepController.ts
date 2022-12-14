import { Request, Response } from "express";
import * as cepService from "./../services/cepService.js";

export async function getAddress(req: Request, res: Response) {
  const { cep } = req.body;
  const address = await cepService.getAddress(cep);

  res.send(address);
}