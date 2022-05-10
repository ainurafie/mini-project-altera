import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router"
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')