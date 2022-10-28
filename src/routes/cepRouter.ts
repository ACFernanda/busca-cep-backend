import { Router } from "express";
import { cepValidator } from "./../middlewares/cepValidator.js";
import { getAddress } from "./../controllers/cepController.js";

const cepRouter = Router();

cepRouter.post("/address", cepValidator, getAddress);

export default cepRouter;