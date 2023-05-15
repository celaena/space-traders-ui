import axios from 'axios'
import ServiceUtils from './ServiceUtils'

export default class ContractService {
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
}
