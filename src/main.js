import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import router from "./router"
import './index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App);
app.component('fas', FontAwesomeIcon);

app.use(router);
app.use(vuex);

app.mount('#app');