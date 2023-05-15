import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import BootstrapVueNext from 'bootstrap-vue-next'

import App from './App.vue'
import router from './router'

import CreateAccountModal from '@/components/CreateAccountModal.vue'
import WaypointCard from '@/components/WaypointCard.vue'
import ContractCard from '@/components/ContractCard.vue'
import ShipCard from '@/components/ShipCard.vue'
import MarketCard from '@/components/MarketCard.vue'

const app = createApp(App)

// app.use(BootstrapVue)
// app.use(IconsPlugin)
app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)

app.component('CreateAccountModal', CreateAccountModal)
app.component('WaypointCard', WaypointCard)
app.component('ContractCard', ContractCard)
app.component('ShipCard', ShipCard)
app.component('MarketCard', MarketCard)

app.mount('#app')
