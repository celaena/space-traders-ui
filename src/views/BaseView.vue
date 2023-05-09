<script setup lang="js">
import UserService from '@/services/UserService';
import SystemService from '@/services/SystemService';
import ContractService from '@/services/ContractService';
import { accountStore } from '@/stores/account';
import Waypoint from '@/classes/waypoint';
import Contract from '@/classes/contract';
import WaypointCard from '@/components/WaypointCard.vue';
import ContractCard from '@/components/ContractCard.vue';

const userService = new UserService();
const systemService = new SystemService();
const contractService = new ContractService();

export default {
  data() {
    return {
      account: accountStore(),
      nearbyWaypointPages: [],
      waypoints: [],
      waypoint: new Waypoint(),
      contract: new Contract(),
      shipyardWaypoint: undefined,
      shipyard: {}
    }
  },
  methods: {
    async getWaypoints(e) {
        let waypoint = this.account.user.headquarters;
        let system = waypoint.split('-').slice(0, 2).join('-');
        this.waypoints = await systemService.getWaypoints(this.account.token, system);
        const pageSize = 4;
        const max = this.waypoints.length - 1;
        let i = 0;
        for (i = 0; i <= max; i += pageSize) {
          this.nearbyWaypointPages.push(this.waypoints.slice(i, i + pageSize));
        }
        if (i < max) {
          this.nearbyWaypointPages.push(this.waypoints.slice(i, max));
        }
    },
    async getWaypoint(e) {
        let waypoint = this.account.user.headquarters;
        let system = waypoint.split('-').slice(0, 2).join('-');
        this.waypoint = await systemService.getWaypoint(this.account.token, system, waypoint);
    },
    async viewShipyard(wp) {
        let system = wp.split('-').slice(0, 2).join('-');
        this.shipyard = await systemService.viewShipyard(this.account.token, system, wp);
    },
    async purchaseShip(wp, type) {
        await userService.purchaseShip(this.account.token, wp, type);
    },
    async getContract(e) {
      this.contract = await contractService.getContract(this.account.token, 'clhfm42tp00lks60drc1511z8');
    },
    async acceptContract(e) {
      await contractService.acceptContract(this.account.token, 'clhfm42tp00lks60drc1511z8');
      this.getContract(null);
    }
  }
}
</script>

<template>
  <main>
    <div class="row">      
      <div class="col-4">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Waypoint</span>
            </div>
            <input type="text" class="form-control" v-model="shipyardWaypoint" />
            <div class="input-group-append">
                <button type="button" class="btn btn-primary" @click="viewShipyard(shipyardWaypoint)">View Shipyard</button>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="ship in shipyard.shipTypes">
        <button type="button" class="btn btn-success" @click="purchaseShip(shipyardWaypoint, ship.type)">{{ ship.type }}</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="getWaypoints">Get Nearby Waypoints</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" @click="getWaypoint">Get Waypoint</button>
      </div>
    </div>
    <div class="row" v-for="wpPage in nearbyWaypointPages">
      <div class="col" v-for="wp in wpPage">
        <WaypointCard :waypoint="wp"></WaypointCard>
      </div>
    </div>
    <WaypointCard :waypoint="waypoint"></WaypointCard>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="getContract">Get Contract</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-success" @click="acceptContract">Accept Contract</button>
      </div>
    </div>
    <ContractCard :contract="contract"></ContractCard>
  </main>
</template>
