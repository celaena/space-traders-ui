import ShipNavRoute from './ship-nav-route'

export default class ShipNav {
  systemSymbol?: string
  waypointSymbol?: string
  route: ShipNavRoute = new ShipNavRoute()
  status?: string
  flightMode?: string
}
