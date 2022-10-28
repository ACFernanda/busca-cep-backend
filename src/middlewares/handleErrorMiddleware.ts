import { Request, Response } from "express";

export default function handleErrorsMiddleware(
  error,
  req: Request,
  res: Response,
  next
) {
  if (error.type === "bad_request") {
    return res.status(400).send(error.message);
  }
  if (error.type === "not_found") {
    return res.status(404).send(error.message);
  }

  return res.sendStatus(500);
}