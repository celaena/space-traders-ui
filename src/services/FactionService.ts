import axios from 'axios'
import ServiceUtils from './ServiceUtils'

export default class FactionService {
  async listFactions(token: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/factions',
      ServiceUtils.buildConfig(token)
    )
    // todo: pagination
    console.log(response)
    return response.data.data
  }
  async getFaction(token: string, id: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/factions/' + id,
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    return response.data.data
  }
}
