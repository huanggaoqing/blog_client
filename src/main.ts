import { createApp } from 'vue'
import '~/base.css'
import '~/style.css'
import 'uno.css'
import { createPinia } from 'pinia'
import '~/assets/js/flexible'
import headDoffA from './tools/headOffA'
import App from '~/App.vue'
import router from '~/router'
import storeConfig from '~/tools/piniaStore/config'
import piniaPersist from '~/tools/piniaStore/piniaPersist'
headDoffA()
const pinia = createPinia()
pinia.use(piniaPersist(storeConfig))
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
