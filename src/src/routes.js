import Client from './components/Client.vue'
import Home from './components/Home.vue'
import auth from './auth'

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/',
    })
  } else {
    next()
  }
}

export default [
    {
        'path': '/client',
        component: Client,
        beforeEnter: requireAuth
    },
    {
        'path': '/',
        component: Home,
    }
];

