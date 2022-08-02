import Vehicle from "./vehicle";

export class ExemptFree implements Vehicle {
  public type: string = "";

  constructor(type: string) {
    this.type = type;
  }

  getVehicleType(): string {
    return this.type;
  }
}
