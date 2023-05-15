<script>
import CreateAccountModal from '@/components/CreateAccountModal.vue'
import UserService from '@/services/UserService'
import { accountStore } from '@/stores/account'

const userService = new UserService()

export default {
  data() {
    return {
      token: undefined,
      account: accountStore(),
      showModal: false
    }
  },
  methods: {
    async getDetails() {
      if (this.token) {
        this.account.setToken(this.token)
      }
      this.account.setUser(await userService.getDetails(this.account.token))
      this.token = this.account.token
    },
    async openCreateModal() {
      this.showModal = !this.showModal;
    },
    logout() {
      let d = new Date()
      document.cookie = 'Token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;SameSite=Strict'
    }
  },
  mounted() {
    if (this.account.token) {
      this.getDetails()
    }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Space Traders UI for Babby</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <span class="material-icons">payments</span> {{ account.user.credits }}
          </li>
          <li class="nav-item">
            <span class="material-icons">foundation</span> {{ account.user.headquarters }}
          </li>
        </ul>
        <ul class="navbar-nav d-flex">          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="material-icons">person</span> {{ account.user.symbol ? account.user.symbol : Login }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Token</span>
                  </div>
                  <input type="text" class="form-control" v-model="token" />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary" @click="getDetails">Login</button>
                  </div>
                </div>
              </li>
              <li><a class="dropdown-item" @click="openCreateModal">Create Account</a></li>
              <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <CreateAccountModal :show="showModal"/> 
</template>
