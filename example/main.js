import { createApp } from 'vue'
import App from './App.vue'
import VirtualScrollList from "../src";
// import VirtualScrollList from "@acbde45/vue-virtual-scroll-list";

const app = createApp(App);

app.component('VirtualScrollList', VirtualScrollList)

app.mount('#app')
