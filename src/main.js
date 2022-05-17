import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router"
import * as VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VeeValidate);
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueSweetalert2);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')