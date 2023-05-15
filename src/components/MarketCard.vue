<script>
import { accountStore } from '@/stores/account'
import Market from '@/classes/market'

export default {
  props: {
    market: {
      type: Market,
      default: () => new Market()
    }
  },
  data() {
    return {
      account: accountStore()
    }
  },
  methods: {}
}
</script>
<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <span class="material-icons">assignment</span> {{ market.symbol }}
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h3>Exports</h3>
              <div class="row" v-for="good in market.exports">
                <div class="col">{{ good.symbol }}</div>
                <div class="col">{{ good.name }}</div>
                <div class="col">{{ good.description }}</div>
              </div>
            </div>
            <div class="col">
              <h3>Imports</h3>
              <div class="row" v-for="good in market.imports">
                <div class="col">{{ good.symbol }}</div>
                <div class="col">{{ good.name }}</div>
                <div class="col">{{ good.description }}</div>
              </div>
            </div>
            <div class="col">
              <h3>Exchange</h3>
              <div class="row" v-for="good in market.exchange">
                <div class="col">{{ good.symbol }}</div>
                <div class="col">{{ good.name }}</div>
                <div class="col">{{ good.description }}</div>
              </div>
            </div>
          </div>
          <div class="row" v-for="good in market.tradeGoods">
            <div class="col">
              {{ good.symbol }}
            </div>
            <div class="col">
              {{ good.tradeVolume }}
            </div>
            <div class="col">
              {{ good.supply }}
            </div>
            <div class="col">
              {{ good.purchasePrice }}
            </div>
            <div class="col">
              {{ good.sellPrice }}
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row" v-for="transaction in market.transactions">
            <div class="col">
              <span class="material-icons">priority_high</span> {{ transaction.waypointSymbol }}
            </div>
            <div class="col">
              <span class="material-icons">check</span> {{ transaction.shipSymbol }}
            </div>
            <div class="col">
              <span class="material-icons">alarm_on</span> {{ transaction.tradeSymbol }}
            </div>
            <div class="col"><span class="material-icons">block</span> {{ transaction.type }}</div>
            <div class="col"><span class="material-icons">block</span> {{ transaction.units }}</div>
            <div class="col">
              <span class="material-icons">block</span> {{ transaction.pricePerUnit }}
            </div>
            <div class="col">
              <span class="material-icons">block</span> {{ transaction.totalPrice }}
            </div>
            <div class="col">
              <span class="material-icons">block</span> {{ transaction.timestamp }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
