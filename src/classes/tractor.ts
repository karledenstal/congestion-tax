import Vehicle from "./vehicle";

export class Tractor implements Vehicle {
    getVehicleType(): string {
        return "Tractor";
    }
}
