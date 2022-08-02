import Vehicle from "./vehicle";

export class Military implements Vehicle {
    getVehicleType(): string {
        return "Military";
    }
}
