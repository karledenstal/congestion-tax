import Vehicle from "./vehicle";

export class Foreign implements Vehicle {
    getVehicleType(): string {
        return "Foreign";
    }
}
