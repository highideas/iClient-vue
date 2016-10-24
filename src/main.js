import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueResource)
Vue.use(VueRouter)

import routes from './routes/routes.js'
const router = new VueRouter({
    history: true,
    routes,
    linkActiveClass: 'is-active'
})

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
