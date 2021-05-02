import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import router from "./router"
import './index.scss'

const app = createApp(App);

app.use(router);

app.use(vuex);

app.mount('#app');