import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


require("../public/assets/vendor/libs/jquery/jquery.js")
require("../public/assets/vendor/libs/popper/popper.js")
require("../public/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js")
require("../public/assets/vendor/js/menu.js")
require("../public/assets/js/main.js")
require("../public/assets/js/dashboards-analytics.js")
require("../public/assets/vendor/js/helpers.js")
require("../public/assets/js/config.js")
