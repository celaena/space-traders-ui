import ShipFuelConsumption from "./ship-fuel-consumption";

export default class ShipFuel {
    current?: number;
    capacity?: number;
    consumed: ShipFuelConsumption = new ShipFuelConsumption();
}