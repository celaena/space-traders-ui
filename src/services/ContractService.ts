import axios from 'axios'
import ServiceUtils from './ServiceUtils'

export default class ContractService {
  async listContracts(token: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/contracts',
      ServiceUtils.buildConfig(token)
    )
    // todo: pagination
    console.log(response)
    return response.data.data
  }
  async getContract(token: string, id: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/contracts/' + id,
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async acceptContract(token: string, id: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/contracts/' + id + '/accept',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async deliverContract(token: string, id: string, ship:string, item:string, units:number) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/contracts/' + id + '/deliver',
      {
        shipSymbol: ship,
        tradeSymbol: item,
        units: units
      },
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
  async fulfillContract(token: string, id: string) {
    const response = await axios.post(
      'https://api.spacetraders.io/v2/my/contracts/' + id + '/fulfill',
      {},
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
}
