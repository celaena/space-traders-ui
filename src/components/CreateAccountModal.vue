<script>
import UserService from '@/services/UserService'

const userService = new UserService()

export default {
  props: {
    show: false
  },
  data() {
    return {
        showLocal: false,
        callsign: undefined,
        faction: 'COSMIC',
        email: undefined,
        showCreated: false,
        token: undefined
    }
  },
  methods: {
    async createAccount() {
        let data = await userService.createAccount(this.email, this.callsign, this.faction);
        console.log(data);
        this.token = data.token;
        this.showCreated = true;
    }
  },
  watch: {
    show: function(newVal, oldVal) {
        this.showLocal = newVal;
    },
    showLocal: function(newVal) {
        if (this.show !== newVal) {
            this.showLocal = newVal;
        }
    }
  }
}
</script>
<template>
  <BModal title="Create New Account" v-model="showLocal" @ok="createAccount">
    <form>
        <div>
          <label class="form-label">Callsign</label>
          <input type="text" class="form-control" v-model="callsign" minlength="3" maxlength="14" required />
        </div>
        <div>
          <label class="form-label">Faction</label>
          <select class="form-select" v-model="faction" required>
            <option value="COSMIC">Cosmic</option>
            <option value="VOID">Void</option>
            <option value="GALACTIC">Galactic</option>
            <option value="QUANTUM">Quantum</option>
            <option value="DOMINION">Dominion</option>
          </select>
        </div>
        <div>
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="email"/>
        </div>
    </form>
  </BModal>
  <BModal title="Account Created" v-model="showCreated" @hidden="showLocal = false">
    <label class="form-label">Account Token:</label>
    <input type="text" class="form-control" readonly v-bind:placeholder="token"/>
  </BModal>
</template>
