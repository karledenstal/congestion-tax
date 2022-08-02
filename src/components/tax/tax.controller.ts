import { Request, Response } from "express";
import { Car } from "../../classes/car";
import { ExemptFree } from "../../classes/exemptFree";
import Vehicle from "../../classes/vehicle";
import { TollFreeVehicles } from "../../entities/TollFreeVehicles";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import { getTax } from "../../utils/congestionTaxCalculator";

export const calculateTax = async (req: Request, res: Response) => {
  const body = req.body;
  const type = capitalizeFirstLetter(req.params.vehicleType);

  let vehicleType: Vehicle = new Car();

  if (type !== "Car" && Object.values(TollFreeVehicles).includes(type))
    vehicleType = new ExemptFree(type);

  const dates: string[] = body.dates;

  const totalFee = getTax(vehicleType, dates);

  res.status(200).json({ total: totalFee, vehicleType: type });
};
