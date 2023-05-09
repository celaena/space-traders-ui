import ShipCargoItem from "./ship-cargo-item";

export default class ShipCargo {
    capacity?: number;
    units?: number;
    inventory: ShipCargoItem = new ShipCargoItem();
}