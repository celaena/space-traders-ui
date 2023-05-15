import ShipRegistration from './ship-registration'
import ShipNav from './ship-nav'
import ShipCrew from './ship-crew'
import ShipFrame from './ship-frame'
import ShipReactor from './ship-reactor'
import ShipEngine from './ship-engine'
import ShipModule from './ship-module'
import ShipMount from './ship-mount'
import ShipCargo from './ship-cargo'
import ShipFuel from './ship-fuel'

export default class Ship {
  symbol?: string
  registration: ShipRegistration = new ShipRegistration()
  nav: ShipNav = new ShipNav()
  crew: ShipCrew = new ShipCrew()
  frame: ShipFrame = new ShipFrame()
  reactor: ShipReactor = new ShipReactor()
  engine: ShipEngine = new ShipEngine()
  modules: ShipModule[] = []
  mounts: ShipMount[] = []
  cargo: ShipCargo = new ShipCargo()
  fuel: ShipFuel = new ShipFuel()
}
