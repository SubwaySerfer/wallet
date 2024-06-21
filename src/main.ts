import { createApp } from 'vue'
import "./scss/style.scss";
// import './style.css'
import router from "./router/index";

import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App);

app.use(router);

app.mount("#app");
