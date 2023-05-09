<script>
import UserService from '../services/UserService';
import { accountStore } from '@/stores/account'

const userService = new UserService();

export default {
  data() {
    return {
        token: undefined,
        account: accountStore()
    }
  },
  methods: {
    async getDetails(e) {
        this.account.setToken(this.token);
        this.account.setUser(await userService.getDetails(this.account.token));
    }
  }
}
</script>
<template>
  <div class="">
    <div class="row">
        <!-- Might figure out what I want to do with this later -->
      <!-- <div class="col">
        <input type="text" v-model="account.name" />
        <button type="button" class="btn btn-success" @click="createAccount">Create Account</button>
      </div> -->
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
