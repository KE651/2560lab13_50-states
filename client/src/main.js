// the Vue app begins here...
// import Vue, App.vue, router, config
import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

import router from '@/router' //import routes

import 'leaflet/dist/leaflet.css'
// for style of leaflet maps

// create the Vue instance
let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)
app.mount('#app')
//mount with id 'app'