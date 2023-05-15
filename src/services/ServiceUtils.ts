export default class ServiceUtils {
  static buildConfig(token: string) {
    return {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}
