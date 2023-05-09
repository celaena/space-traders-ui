import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import WaypointCard from '@/components/WaypointCard.vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('WaypointCard', WaypointCard);

app.mount('#app')
