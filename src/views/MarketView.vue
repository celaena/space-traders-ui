<script setup lang="js">
import { accountStore } from '@/stores/account';
import FleetService from '@/services/FleetService';
import SystemService from '@/services/SystemService';

import Market from '@/classes/market';

const fleetService = new FleetService();
const systemService = new SystemService();

export default {
  data() {
    return {
      account: accountStore(),
      waypoint: undefined,
      market: new Market()
    }
  },
  methods: {
    async viewMarket() {
        let system = this.waypoint.split('-').slice(0, 2).join('-');
        this.market = await systemService.viewMarket(this.account.token, system, this.waypoint);
    }
  }
}
</script>

<template>
  <main>
    <div class="input-group">
      <input type="text" class="form-control" v-model="waypoint" />
      <div class="input-group-append">
        <button type="button" class="btn btn-primary" @click="viewMarket">View Market</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <MarketCard :market="market"></MarketCard>
      </div>
    </div>
  </main>
</template>
