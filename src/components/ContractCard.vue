<script>
import Contract from '@/classes/contract';

export default {
  props: {
    contract: {
      type: Contract,
      default: () => (new Contract())
    }
  }
}
</script>
<template>
    <div class="row">
      <div class="col">
        <div class="card bg-dark text-white">
          <div class="card-header">
            <div class="row">
                <div class="col-4">
                    <span class="material-icons">assignment</span> {{ contract.id }}
                </div>
                <div class="col">
                    <span class="material-icons">groups_3</span> {{ contract.factionSymbol }}
                </div>
                <div class="col">
                    <span class="material-icons">gavel</span> {{ contract.type }}
                </div>
                <div class="col-2">
                    <span class="material-icons">payments</span> {{ contract.terms.payment.onAccepted }}
                </div>
                <div class="col-2">
                    <span class="material-icons">payments</span> {{ contract.terms.payment.onFulfilled }}
                </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
                <div class="row" v-for="delivery in contract.terms.deliver">
                    <div class="col">{{ delivery.tradeSymbol }}</div>
                    <div class="col">{{ delivery.destinationSymbol }}</div>
                    <div class="col">{{ delivery.unitsFulfilled }} / {{ delivery.unitsRequired }}</div>
                </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="row">
                <div class="col-2">
                    <span class="material-icons">priority_high</span> {{ contract.accepted }}
                </div>
                <div class="col-2">
                    <span class="material-icons">check</span> {{ contract.fulfilled }}
                </div>
                <div class="col">
                    <span class="material-icons">alarm_on</span> {{ contract.terms.deadline }}
                </div>
                <div class="col">
                    <span class="material-icons">block</span> {{ contract.expiration }}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>