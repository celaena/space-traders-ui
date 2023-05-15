<script>
import Ship from '@/classes/ship'
import FleetService from '@/services/FleetService'
import { accountStore } from '@/stores/account'

const fleetService = new FleetService()

export default {
  props: {
    ship: {
      type: Ship,
      default: () => new Ship()
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
      await fleetService.dockShip(this.account.token, this.ship.symbol)
    },
    async refuel() {
      await fleetService.refuelShip(this.account.token, this.ship.symbol)
    },
    async navigate(wp) {
      await fleetService.navigateShip(this.account.token, this.ship.symbol, wp)
    },
    async orbit() {
      await fleetService.orbitShip(this.account.token, this.ship.symbol)
    },
    async extract() {
      await fleetService.extractResources(this.account.token, this.ship.symbol)
    },
    async sellCargo(good, amount) {
      await fleetService.sellCargo(this.account.token, this.ship.symbol, good, amount)
    }
  }
}
</script>
<template>
  <div class="row">
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="dock">Dock</button>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="refuel">Refuel</button>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="orbit">Orbit</button>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary" @click="extract">Extract</button>
    </div>
    <div class="col">
      <div class="input-group">
        <input type="text" class="form-control" v-model="waypoint" />
        <div class="input-group-append">
          <button type="button" class="btn btn-primary" @click="navigate(waypoint)">
            Navigate
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="card">
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
            <div class="col">
              <span class="material-icons">oil_barrel</span> {{ ship.fuel.current }} /
              {{ ship.fuel.capacity }}
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading6">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  Cargo Hold {{ ship.cargo.units }} / {{ ship.cargo.capacity }}
                </button>
              </h2>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                aria-labelledby="heading6"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row" v-for="item in ship.cargo.inventory">
                    <div class="col">
                      {{ item.name }} <span class="material-icons">help_outline</span>
                    </div>
                    <div class="col">{{ item.description }}</div>
                    <div class="col">{{ item.units }}</div>
                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click="sellCargo(item.symbol, item.units)"
                      >
                        Sell
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Navigation
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col">
                      <span class="material-icons">public</span> {{ ship.nav.systemSymbol }}
                    </div>
                    <div class="col">
                      <span class="material-icons">place</span> {{ ship.nav.waypointSymbol }}
                    </div>
                    <div class="col">
                      <span class="material-icons">games</span> {{ ship.nav.status }}
                    </div>
                    <div class="col">
                      <span class="material-icons">flight</span> {{ ship.nav.flightMode }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">{{ ship.nav.route.departure.systemSymbol }}</div>
                    <div class="col">{{ ship.nav.route.departure.symbol }}</div>
                    <div class="col">{{ ship.nav.route.departure.type }}</div>
                    <div class="col">
                      {{ ship.nav.route.departure.x }} : {{ ship.nav.route.departure.y }}
                    </div>
                    <div class="col">{{ ship.nav.route.departureTime }}</div>
                  </div>
                  <div class="row">
                    <div class="col">{{ ship.nav.route.destination.systemSymbol }}</div>
                    <div class="col">{{ ship.nav.route.destination.symbol }}</div>
                    <div class="col">{{ ship.nav.route.destination.type }}</div>
                    <div class="col">
                      {{ ship.nav.route.destination.x }} : {{ ship.nav.route.destination.y }}
                    </div>
                    <div class="col">{{ ship.nav.route.arrival }}</div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span class="material-icons">oil_barrel</span> {{ ship.fuel.consumed.amount }}
                    </div>
                    <div class="col">{{ ship.fuel.consumed.timestamp }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Crew
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row">
                    <div class="col">
                      <span class="material-icons">groups</span> {{ ship.crew.current }} /
                      {{ ship.crew.required }} / {{ ship.crew.capacity }}
                    </div>
                    <div class="col">{{ ship.crew.rotation }}</div>
                    <div class="col">{{ ship.crew.morale }}</div>
                    <div class="col">{{ ship.crew.wages }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Structure
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
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
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading4">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  Modules
                </button>
              </h2>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row" v-for="module in ship.modules">
                    <div class="col">{{ module.name }}</div>
                    <div class="col">{{ module.description }}</div>
                    <div class="col">{{ module.capacity }}</div>
                    <div class="col">{{ module.range }}</div>
                    <div class="col">{{ module.requirements.power }}</div>
                    <div class="col">{{ module.requirements.crew }}</div>
                    <div class="col">{{ module.requirements.slots }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading5">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Mounts
                </button>
              </h2>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                aria-labelledby="heading5"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="row" v-for="mount in ship.mounts">
                    <div class="col">{{ mount.name }}</div>
                    <div class="col">{{ mount.description }}</div>
                    <div class="col">{{ mount.strength }}</div>
                    <div class="col" v-for="deposit in mount.deposits">{{ deposit }}</div>
                    <div class="col">{{ mount.requirements.power }}</div>
                    <div class="col">{{ mount.requirements.crew }}</div>
                    <div class="col">{{ mount.requirements.slots }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
