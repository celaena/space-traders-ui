import ShipNavRouteWaypoint from './ship-nav-route-waypoint'

export default class ShipNavRoute {
  destination: ShipNavRouteWaypoint = new ShipNavRouteWaypoint()
  departure: ShipNavRouteWaypoint = new ShipNavRouteWaypoint()
  departureTime?: Date
  arrival?: Date
}
