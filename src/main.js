import { createApp } from 'vue';
import App from './App.vue';
import vuex from './store';
import router from "./router";
import './css/index.scss';
import './js/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);
app.component('fai', FontAwesomeIcon);

app.use(router);
app.use(vuex);

app.mount('#app');