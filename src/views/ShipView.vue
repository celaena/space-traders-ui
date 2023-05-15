<script setup lang="js">
import FleetService from '@/services/FleetService';
import { accountStore } from '@/stores/account';

const fleetService = new FleetService();

export default {
  data() {
    return {
      account: accountStore(),
      ships: []
    }
  },
  methods: {
    async listShips() {
        this.ships = await fleetService.listShips(this.account.token);
    }
  },
  mounted() {
    if (this.account.token) {
      this.listShips();
    }
  }
}
</script>

<template>
  <main>
    <button type="button" class="btn btn-primary" @click="listShips">View Ships</button>
    <div class="row">
      <div class="col-12" v-for="ship in ships">
        <ShipCard :ship="ship"></ShipCard>
      </div>
    </div>
  </main>
</template>
