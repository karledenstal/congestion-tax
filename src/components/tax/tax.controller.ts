import { Request, Response } from "express";
import { Car } from "../../classes/car";
import { Diplomat } from "../../classes/diplomat";
import { Emergency } from "../../classes/emergency";
import { Foreign } from "../../classes/foreign";
import { Military } from "../../classes/military";
import Motorbike from "../../classes/motorbike";
import { Tractor } from "../../classes/tractor";
import Vehicle from "../../classes/vehicle";
import { getTax } from "../../utils/congestionTaxCalculator";

export const calculateTax = async (req: Request, res: Response) => {
  console.log('params', req.params);
  console.log('body', req.body);

  const body = req.body;
  const type = req.params.vehicleType.toUpperCase();

  let vehicleType: Vehicle = new Car();

  if (type === "MOTORCYCLE") vehicleType = new Motorbike();
  else if (type === "DIPLOMAT") vehicleType = new Diplomat();
  else if (type === "EMERGENCY") vehicleType = new Emergency();
  else if (type === "FOREIGN") vehicleType = new Foreign();
  else if (type === "TRACTOR") vehicleType = new Tractor();
  else if (type === "MILITARY") vehicleType = new Military();

  const dates: string[] = body.dates;

  const totalFee = getTax(vehicleType, dates);

  res.status(200).json(totalFee);
};
