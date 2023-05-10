<script>
import UserService from '../services/UserService';
import { accountStore } from '@/stores/account';

const userService = new UserService();

export default {
  data() {
    return {
        token: undefined,
        account: accountStore()
    }
  },
  methods: {
    async getDetails() {
        if (this.token) {
          this.account.setToken(this.token);
        }
        this.account.setUser(await userService.getDetails(this.account.token));
        this.token = this.account.token;
    }
  },
  mounted() {
    if (this.account.token) {
      this.getDetails();
    }
  }
}
</script>
<template>
  <div class="">
    <div class="row">
      <div class="col-4">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Token</span>
            </div>
            <input type="text" class="form-control" v-model="token" />
            <div class="input-group-append">
                <button type="button" class="btn btn-primary" @click="getDetails">Login</button>
            </div>
        </div>
      </div>
      <div class="col">
        <span class="material-icons">person</span> {{ account.user.symbol }}
      </div>
      <div class="col">
        <span class="material-icons">payments</span> {{ account.user.credits }}
      </div>
      <div class="col">
        <span class="material-icons">foundation</span> {{ account.user.headquarters }}
      </div>
    </div>
  </div>
</template>
