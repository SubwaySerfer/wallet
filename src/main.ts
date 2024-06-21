import { createApp } from 'vue'
import "./scss/style.scss";
// import './style.css'
import router from "./router/index";
import App from './App.vue'

import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from './components/layouts/TheFooter.vue';

// createApp(App).mount('#app')
const app = createApp(App);

app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);

app.use(router);

app.mount("#app");
