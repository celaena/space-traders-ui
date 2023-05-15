import { defineStore } from 'pinia'
import FleetService from '@/services/FleetService';
import ShipsModel from '../classes/ships-model'
import { accountStore } from '@/stores/account';

const fleetService = new FleetService();

export const useShipStore = defineStore('ships', {
  state: () =>
    ({
      account: accountStore(),
      ships: [],
      loading: false,
      error: ''
    } as ShipsModel),
  actions: {
    async getShips() {
        try {
            this.ships = await fleetService.listShips(this.account.token);
        } catch (error) {
            console.error(error);
            this.error = error + '';
        }
    }
  }
})
