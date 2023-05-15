import ShipRequirements from './ship-requirements'

export default class ShipMount {
  symbol?: string
  name?: string
  description?: string
  strength?: number
  deposits: string[] = []
  requirements: ShipRequirements = new ShipRequirements()
}
