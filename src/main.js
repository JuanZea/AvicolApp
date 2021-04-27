import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'

const app = createApp(App);

app.use(vuex);

app.mount('#app');