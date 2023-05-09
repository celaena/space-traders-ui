import axios from 'axios';
import ServiceUtils from './ServiceUtils';

export default class UserService {
    async getDetails(token: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/my/agent', 
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    async purchaseShip(token: string, waypoint: string, shipType: string) {
        const response = await axios.post(
            'https://api.spacetraders.io/v2/my/ships', 
            {
                "shipType": shipType,
                "waypointSymbol": waypoint
            },
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
}