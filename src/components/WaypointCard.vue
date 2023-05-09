<script>
import Waypoint from '@/classes/waypoint';

export default {
  props: {
    waypoint: {
      type: Waypoint,
      default: () => (new Waypoint())
    }
  },
  data() {
    return {
        isCollapsed: true
    }
  }
}
</script>
<template>
    <div class="row">
      <div class="col">
        <div class="card bg-dark text-white" @click="isCollapsed = true">
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
          <div class="card-body" :class="{collapse: isCollapsed}">
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
</template>