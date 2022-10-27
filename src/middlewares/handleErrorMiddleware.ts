import { Request, Response } from "express";

export default function handleErrorsMiddleware(
  error,
  req: Request,
  res: Response,
  next
) {
  if (error.type === "not_found") {
    return res.sendStatus(404);
  }
  if (error.type === "unprocessable_entity") {
    return res.sendStatus(422);
  }

  return res.sendStatus(500);
}