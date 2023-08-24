import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

// Vuetify
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(vuetify)
app.use(VueApexCharts)
app.use(createPinia())
app.use(router)

app.mount('#app')