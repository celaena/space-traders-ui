<script setup lang="js">
import SystemService from '@/services/SystemService';
import ContractService from '@/services/ContractService';
import { accountStore } from '@/stores/account';
import Waypoint from '@/classes/waypoint';
import Contract from '@/classes/contract';
import WaypointCard from '@/components/WaypointCard.vue';
import ContractCard from '@/components/ContractCard.vue';

const systemService = new SystemService();
const contractService = new ContractService();

export default {
  data() {
    return {
      account: accountStore(),
      waypoint: new Waypoint(),
      contract: new Contract()
    }
  },
  methods: {
    async getWaypoint(e) {
        let waypoint = this.account.user.headquarters;
        let system = waypoint.split('-').slice(0, 2).join('-');
        this.waypoint = await systemService.getWaypoint(this.account.token, system, waypoint);
    },
    async getContract(e) {
      this.contract = await contractService.getContract(this.account.token, 'clhfm42tp00lks60drc1511z8');
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
    <ContractCard :contract="contract"></ContractCard>
  </main>
</template>
