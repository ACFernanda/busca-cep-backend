import { Router } from "express";

import cepRouter from "./cepRouter.js";

const router = Router();

router.use(cepRouter);

export default router;