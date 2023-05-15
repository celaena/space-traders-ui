import axios from 'axios'
import ServiceUtils from './ServiceUtils'

export default class SystemService {
  async getSystems(token: string) {
    // todo: limiter
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    // todo: pagination?!
    return response.data.data
  }
  async getSystem(token: string, system: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + system,
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async getWaypoints(token: string, system: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + system + '/waypoints',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    // todo: pagination?!
    return response.data.data
  }
  async getWaypoint(token: string, system: string, waypoint: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + system + '/waypoints/' + waypoint,
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async viewMarket(token: string, system: string, waypoint: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + system + '/waypoints/' + waypoint + '/market',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async viewShipyard(token: string, system: string, waypoint: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + system + '/waypoints/' + waypoint + '/shipyard',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async viewJumpGate(token: string, system: string, waypoint: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/systems/' + system + '/waypoints/' + waypoint + '/jump-gate',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
}
