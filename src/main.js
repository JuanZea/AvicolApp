import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import './css/index.scss';
import './js/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "../firebase.config";

const app = createApp(App);
app.component('fai', FontAwesomeIcon);

app.use(router);

app.mount('#app');