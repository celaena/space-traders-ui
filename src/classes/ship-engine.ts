import ShipRequirements from "./ship-requirements";

export default class ShipEngine {
    symbol?: string;
    name?: string;
    description?: string;
    condition?: number;
    speed?: number;
    requirements: ShipRequirements = new ShipRequirements();
}