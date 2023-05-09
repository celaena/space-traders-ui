import axios from 'axios';

function buildConfig(token:string) {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
}

export default class UserService {
    async getDetails(token: string) {
        const response = await axios.get(
            'https://api.spacetraders.io/v2/my/agent', buildConfig(token));
        console.log(response);
        return response.data.data;
    }
}