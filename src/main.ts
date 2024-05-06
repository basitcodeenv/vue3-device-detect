
import { createApp } from 'vue'
import App from './App.vue'

import VueDeviceDetect from '../lib'

const Vue = createApp(App).use(VueDeviceDetect)

Vue.mount('#app')
