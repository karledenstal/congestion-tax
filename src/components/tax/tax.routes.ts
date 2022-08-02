import { Router } from "express";
import { calculateTax } from "./tax.controller";

const router = Router();

router.route("/:vehicleType").post(calculateTax);

export default router;
