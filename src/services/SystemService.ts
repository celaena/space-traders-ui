import axios from 'axios';
import ServiceUtils from './ServiceUtils';

export default class SystemService {   
    async getWaypoints(token: string, system: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/systems/' + system + '/waypoints', 
            ServiceUtils.buildConfig(token));
        console.log(response);
        // todo: pagination?!
        return response.data.data;
    }
    async getWaypoint(token: string, system: string, waypoint: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/systems/' + system + '/waypoints/' + waypoint, 
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
}