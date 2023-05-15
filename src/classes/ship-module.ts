import ShipRequirements from './ship-requirements'

export default class ShipModule {
  symbol?: string
  name?: string
  description?: string
  capacity?: number
  range?: number
  requirements: ShipRequirements = new ShipRequirements()
}
