import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";
import { ApiResponse } from '../utils/api-response.js';

const router = Router();

router.route('/').get(healthCheck);

export default router;