import axios from 'axios'
import ServiceUtils from './ServiceUtils'

export default class FleetService {
  async listShips(token: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/ships',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    // todo: pagination?!
    return response.data.data
  }
  async purchaseShip(token: string, waypoint: string, shipType: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships',
      {
        shipType: shipType,
        waypointSymbol: waypoint
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async getShip(token: string, symbol: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/ships/' + symbol,
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async getShipCargo(token: string, symbol: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/cargo',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    // todo: pagination?!
    return response.data.data
  }
  async orbitShip(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/orbit',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async refineMaterial(token: string, symbol: string, product: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/refine',
      {
        produce: product
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async createChart(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/chart',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async getCooldown(token: string, symbol: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/cooldown',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    // todo: pagination?!
    return response.data.data
  }
  async dockShip(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/dock',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async createSurvey(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/survey',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async extractResources(token: string, symbol: string, survey?: string) {
    let payload = survey ? {survey: survey} : {};
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/extract',
      payload,
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async jettisonCargo(token: string, symbol: string, item: string, units: number) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/jettison',
      {
        symbol: item,
        units: units
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async jumpShip(token: string, symbol: string, system: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/jump',
      {
        systemSymbol: system
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async navigateShip(token: string, symbol: string, waypoint: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/navigate',
      {
        waypointSymbol: waypoint
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async patchNav(token: string, symbol: string, flightMode: string) {
    const response = await axios.patch(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/nav',
      {
        flightMode: flightMode
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async getNav(token: string, symbol: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/nav',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async warpShip(token: string, symbol: string, waypoint: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/warp',
      {
        waypointSymbol: waypoint
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async sellCargo(token: string, symbol: string, good: string, units: number) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/sell',
      {
        symbol: good,
        units: units
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async scanSystem(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/scan/systems',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async scanWaypoints(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/scan/waypoints',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async scanShips(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/scan/ships',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async refuelShip(token: string, symbol: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/refuel',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async purchaseCargo(token: string, symbol: string, item: string, units: number) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/purchase',
      {
        symbol: item,
        units: units
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async transferCargo(token: string, symbol: string, item: string, units: number, destination: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/ships/' + symbol + '/transfer',
      {
        symbol: item,
        units: units,
        shipSymbol: destination
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
}
