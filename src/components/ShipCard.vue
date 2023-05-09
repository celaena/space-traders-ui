<script>
import Ship from '@/classes/ship';
import FleetService from '@/services/FleetService';
import { accountStore } from '@/stores/account';

const fleetService = new FleetService();

export default {
  props: {
    ship: {
      type: Ship,
      default: () => (new Ship())
    }
  },
  data() {
    return {
        account: accountStore(),
        waypoint: undefined
    }
  },
  methods: {
    async dock() {
        await fleetService.dockShip(this.account.token, this.ship.symbol);
    },
    async refuel() {
        await fleetService.refuelShip(this.account.token, this.ship.symbol);
    },
    async navigate(wp) {
        await fleetService.navigateShip(this.account.token, this.ship.symbol, wp);
    },
    async orbit() {
        await fleetService.orbitShip(this.account.token, this.ship.symbol);
    },
    async extract() {
        await fleetService.extractResources(this.account.token, this.ship.symbol);
    }
  }
}
</script>
<template>
    <div class="row">
        <div class="col">
            <button type="button" class="btn btn-primary" @click="dock">Dock</button>
            <button type="button" class="btn btn-primary" @click="refuel">Refuel</button>
            <button type="button" class="btn btn-primary" @click="orbit">Orbit</button>
            <button type="button" class="btn btn-primary" @click="extract">Extract</button>
            <div class="input-group">
                <input type="text" class="form-control" v-model="waypoint" />
                <div class="input-group-append">
                    <button type="button" class="btn btn-primary" @click="navigate(waypoint)">Navigate</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card bg-dark text-white">
          <div class="card-header">
            <div class="row">
                <div class="col-4">
                    <span class="material-icons">assignment</span> {{ ship.symbol }}
                </div>
                <div class="col">
                    <span class="material-icons">person</span> {{ ship.registration.name }}
                </div>
                <div class="col">
                    <span class="material-icons">groups_3</span> {{ ship.registration.factionSymbol }}
                </div>
                <div class="col-2">
                    <span class="material-icons">gavel</span> {{ ship.registration.role }}
                </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
                <div class="col">{{ ship.nav.systemSymbol }}</div>
                <div class="col">{{ ship.nav.waypointSymbol }}</div>
                <div class="col">{{ ship.nav.status }}</div>
                <div class="col">{{ ship.nav.flightMode }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.nav.route.departure.systemSymbol }}</div>
                <div class="col">{{ ship.nav.route.departure.symbol }}</div>
                <div class="col">{{ ship.nav.route.departure.type }}</div>
                <div class="col">{{ ship.nav.route.departure.x }} : {{ ship.nav.route.departure.y }}</div>
                <div class="col">{{ ship.nav.route.departureTime }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.nav.route.destination.systemSymbol }}</div>
                <div class="col">{{ ship.nav.route.destination.symbol }}</div>
                <div class="col">{{ ship.nav.route.destination.type }}</div>
                <div class="col">{{ ship.nav.route.destination.x }} : {{ ship.nav.route.destination.y }}</div>
                <div class="col">{{ ship.nav.route.arrival }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.crew.current }}</div>
                <div class="col">{{ ship.crew.required }}</div>
                <div class="col">{{ ship.crew.capacity }}</div>
                <div class="col">{{ ship.crew.rotation }}</div>
                <div class="col">{{ ship.crew.morale }}</div>
                <div class="col">{{ ship.crew.wages }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.frame.name }}</div>
                <div class="col">{{ ship.frame.description }}</div>
                <div class="col">{{ ship.frame.condition }}</div>
                <div class="col">{{ ship.frame.moduleSlots }}</div>
                <div class="col">{{ ship.frame.mountingPoints }}</div>
                <div class="col">{{ ship.frame.fuelCapacity }}</div>
                <div class="col">{{ ship.frame.requirements.power }}</div>
                <div class="col">{{ ship.frame.requirements.crew }}</div>
                <div class="col">{{ ship.frame.requirements.slots }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.reactor.name }}</div>
                <div class="col">{{ ship.reactor.description }}</div>
                <div class="col">{{ ship.reactor.condition }}</div>
                <div class="col">{{ ship.reactor.powerOutput }}</div>
                <div class="col">{{ ship.reactor.requirements.power }}</div>
                <div class="col">{{ ship.reactor.requirements.crew }}</div>
                <div class="col">{{ ship.reactor.requirements.slots }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.engine.name }}</div>
                <div class="col">{{ ship.engine.description }}</div>
                <div class="col">{{ ship.engine.condition }}</div>
                <div class="col">{{ ship.engine.speed }}</div>
                <div class="col">{{ ship.engine.requirements.power }}</div>
                <div class="col">{{ ship.engine.requirements.crew }}</div>
                <div class="col">{{ ship.engine.requirements.slots }}</div>
            </div>
            <div class="row" v-for="module in ship.modules">
                <div class="col">{{ module.name }}</div>
                <div class="col">{{ module.description }}</div>
                <div class="col">{{ module.capacity }}</div>
                <div class="col">{{ module.range }}</div>
                <div class="col">{{ module.requirements.power }}</div>
                <div class="col">{{ module.requirements.crew }}</div>
                <div class="col">{{ module.requirements.slots }}</div>
            </div>
            <div class="row" v-for="mount in ship.mounts">
                <div class="col">{{ mount.name }}</div>
                <div class="col">{{ mount.description }}</div>
                <div class="col">{{ mount.strength }}</div>
                <div class="col" v-for="deposit in mount.deposits">{{ deposit }}</div>
                <div class="col">{{ mount.requirements.power }}</div>
                <div class="col">{{ mount.requirements.crew }}</div>
                <div class="col">{{ mount.requirements.slots }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.cargo.units }} / {{ ship.cargo.capacity }}</div>
                <div class="col">{{ ship.engine.description }}</div>                
            </div>
            <div class="row" v-for="item in ship.cargo.inventory">
                <div class="col">{{ item.name }}</div>
                <div class="col">{{ item.description }}</div>
                <div class="col">{{ item.units }}</div>
            </div>
            <div class="row">
                <div class="col">{{ ship.fuel.current }} / {{ ship.fuel.capacity }}</div>
                <div class="col">{{ ship.fuel.consumed.amount }}</div>
                <div class="col">{{ ship.fuel.consumed.timestamp }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>