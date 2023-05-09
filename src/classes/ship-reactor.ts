import ShipRequirements from "./ship-requirements";

export default class ShipReactor {
    symbol?: string;
    name?: string;
    description?: string;
    condition?: number;
    powerOutput?: number;
    requirements: ShipRequirements = new ShipRequirements();
}