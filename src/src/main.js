import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

import routes from './routes.js'
const router = new VueRouter({
    history: true,
    routes
})


new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
    router
})
