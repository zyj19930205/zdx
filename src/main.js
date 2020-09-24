import Vue from 'vue'
import App from './App.vue'
import HoverCss from 'hover.css'
import router from "./router";
import './assets/css/_globa.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.prototype.$axios = axios;

Vue.use(HoverCss)
Vue.use(ElementUI)

Vue.config.productionTip = false





new Vue({
  render: h => h(App),
  router
}).$mount('#app')
