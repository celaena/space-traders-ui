import axios from 'axios';
import ServiceUtils from './ServiceUtils';

export default class FleetService {   
    async listShips(token: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/my/ships', 
            ServiceUtils.buildConfig(token));
        console.log(response);
        // todo: pagination?!
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
    async getShip(token: string, symbol: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/my/ships/' + symbol, 
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    async getShipCargo(token: string, symbol: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/my/ships/' + symbol + '/cargo', 
            ServiceUtils.buildConfig(token));
        console.log(response);
        // todo: pagination?!
        return response.data.data;
    }
    async orbitShip(token: string, symbol: string) {
        const response = await axios.post(
            'https://api.spacetraders.io/v2/my/ships/' + symbol + '/orbit', 
            {},
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    // todo: refine
    // todo: chart
    // todo: cooldown    
    async dockShip(token: string, symbol: string) {
        const response = await axios.post(
            'https://api.spacetraders.io/v2/my/ships/' + symbol + '/dock', 
            {},
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    // todo: survey    
    async extractResources(token: string, symbol: string) {
        // todo: survey input
        const response = await axios.post(
            'https://api.spacetraders.io/v2/my/ships/' + symbol + '/extract', 
            {},
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    // todo: jettison
    // todo: jump    
    async navigateShip(token: string, symbol: string, waypoint: string) {
        // todo: survey input
        const response = await axios.post(
            'https://api.spacetraders.io/v2/my/ships/' + symbol + '/navigate', 
            {
                "waypointSymbol": waypoint
            },
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    // todo: patch nav
    // todo: get nav
    // todo: warp
    // todo: sell cargo
    // todo: scan system
    // todo: scan wp
    // todo: scan ships
    async refuelShip(token: string, symbol: string) {
        const response = await axios.post(
            'https://api.spacetraders.io/v2/my/ships/' + symbol + '/refuel', 
            {},
            ServiceUtils.buildConfig(token));
        console.log(response);
        return response.data.data;
    }
    // todo: purchase cargo
    // todo: transfer cargo
}