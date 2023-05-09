<script setup lang="js">
import SystemService from '@/services/SystemService';
import { accountStore } from '@/stores/account';
import Waypoint from '@/classes/waypoint';
import WaypointCard from '@/components/WaypointCard.vue';

const systemService = new SystemService();

export default {
  data() {
    return {
      account: accountStore(),
      waypoint: new Waypoint(),
      contract: undefined
    }
  },
  methods: {
    async getWaypoint(e) {
        let waypoint = this.account.user.headquarters;
        let system = waypoint.split('-').slice(0, 2).join('-');
        this.waypoint = await systemService.getWaypoint(this.account.token, system, waypoint);
    }
  }
}
</script>

<template>
  <main>
    <button type="button" class="btn btn-primary" @click="getWaypoint">Get Waypoint</button>
    <WaypointCard :waypoint="waypoint"></WaypointCard>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="getContract">Get Contract</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-success" @click="acceptContract">Accept Contract</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        {{ contract }}
      </div>
    </div>
  </main>
</template>
