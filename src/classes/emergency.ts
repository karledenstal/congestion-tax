import Vehicle from "./vehicle";

export class Emergency implements Vehicle {
    getVehicleType(): string {
        return "Emergency";
    }
}
