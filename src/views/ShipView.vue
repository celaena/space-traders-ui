<script setup lang="js">
import { useShipStore } from '@/stores/ships';

export default {
  data() {
    return {
      shipStore: useShipStore()
    }
  },
  methods: {
    async listShips() {
        this.shipStore.getShips();
    }
  },
  mounted() {
    if (this.shipStore.ships.length === 0) {
      this.listShips();
    }
  }
}
</script>

<template>
  <main>
    <button type="button" class="btn btn-primary" @click="listShips">View Ships</button>
    <div class="row">
      <div class="col-12" v-for="ship in shipStore.ships">
        <ShipCard :ship="ship"></ShipCard>
      </div>
    </div>
  </main>
</template>
