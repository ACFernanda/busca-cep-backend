import { Request, Response } from "express";
import { cepSchema } from "./../schemas/cepSchema.js";

export function cepValidator(req: Request, res: Response, next) {
  const body = req.body;
  const validation = cepSchema.validate(body);
  
  if (validation.error) {
    throw {
      type: "unprocessable_entity",
      message: validation.error.details.map((detail) => detail.message),
    };
  }

  next();
}