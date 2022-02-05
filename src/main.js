import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import BaseButton from "./components/UI/BaseButton.vue";
import BaseInformation from "./components/UI/BaseInformation";


createApp(App).component('base-button',BaseButton).component('base-information', BaseInformation).use(router).mount('#app')
