import axios from 'axios'
import ServiceUtils from './ServiceUtils'

export default class UserService {
  async getDetails(token: string) {
    const response = await axios.get(
      'https://api.spacetraders.io/v2/my/agent',
      ServiceUtils.buildConfig(token)
    )
    console.log(response)
    let d = new Date()
    // 30 day session
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000)
    document.cookie =
      'Token=' + token + ';expires=' + d.toUTCString() + ';path=/' + ';SameSite=Strict'
    return response.data.data
  }
  async createAccount(email: string, symbol: string, faction: string) {
    // todo: survey input
    const response = await axios.post(
      'https://api.spacetraders.io/v2/register',
      {
        faction: faction,
        symbol: symbol,
        email: email
      }
    )
    console.log(response)
    return response.data.data
  }
}
