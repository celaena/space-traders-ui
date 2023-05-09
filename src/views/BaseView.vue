<script>
import SystemService from '@/services/SystemService';
import { accountStore } from '@/stores/account';
import Waypoint from '@/classes/waypoint';

const systemService = new SystemService();

export default {
  data() {
    return {
      account: accountStore(),
      waypoint: new Waypoint()
    }
  },
  methods: {
    async getWaypoint(e) {
        this.waypoint = await systemService.getWaypoint(this.account.token, 'X1-DF55', 'X1-DF55-20250Z');
    }
  }
}
</script>

<template>
  <main>
    <button type="button" class="btn btn-primary" @click="getWaypoint">Get Waypoint</button>
    <div class="row">
      <div class="col">
        <div class="card bg-dark text-white">
          <div class="card-header">
            <div class="row">
              <div class="col">
                <span class="material-icons">public</span> {{ waypoint.systemSymbol }}
              </div>
              <div class="col">
                <span class="material-icons">place</span> {{ waypoint.symbol }}
              </div>
              <div class="col">
                <span class="material-icons">gavel</span> {{ waypoint.type }}
              </div>
              <div class="col">
                <span class="material-icons">map</span> {{ waypoint.x }} : {{ waypoint.y }}
              </div>
              <div class="col">
                <span class="material-icons">groups_3</span> {{ waypoint.faction.symbol }}
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row" v-for="trait in waypoint.traits">
              <div class="col-3">{{ trait.name }}</div>
              <div class="col">{{ trait.description }}</div>
            </div>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-2">
                Orbitals:
              </div>
              <div class="col" v-for="orbital in waypoint.orbitals">
                {{ orbital.symbol }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
