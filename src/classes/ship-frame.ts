import ShipRequirements from './ship-requirements';

export default class ShipFrame {
    symbol?: string;
    name?: string;
    description?: string;
    condition?: number;
    moduleSlots?: number;
    mountingPoints?: number;
    fuelCapacity?: number;
    requirements: ShipRequirements = new ShipRequirements();
}