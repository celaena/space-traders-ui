<script>
import axios from 'axios';
export default {
  data() {
    return {
      account: {
        token: null,
        user: {
			accountId: null,
			symbol: "Not logged in",
			headquarters: null,
			credits: null
		},
      }
    }
  },
  methods: {
    // createAccount(e) {
    //     axios
    //         .post('https://api.spacetraders.io/v2/register', {
    //             'symbol': this.account.name,
    //             'faction': 'COSMIC'
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(response => {
    //             console.log(response);
    //             this.output = response.data;
    //         });
    // },
    getDetails(e) {
        axios.get('https://api.spacetraders.io/v2/my/agent',
        {
            headers: {
                'Authorization': 'Bearer ' + this.account.token
            }
        })
        .then(response => {
            console.log(response);
            this.account.user = response.data.data;
        });
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
            <input type="text" class="form-control" v-model="account.token" />
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
