import Client from './components/Client.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Area from './components/Areas.vue'
import auth from './auth'

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
    })
  } else {
    next()
  }
}

export default [
    {
        'path': '/client',
        component: Client,
        beforeEnter: requireAuth,
/*        children: [
            {
                'path': '/create',
                component: ClientCreate
            }
        ]*/
    },
    {
        'path': '/',
        component: Home,
        beforeEnter: requireAuth
    },
    {
        'path': '/login',
        component: Login,
    },
    {
        'path': '/area',
        component: Area,
        beforeEnter: requireAuth
    },
    {
        'path': '/visit/:id',
        'name' : 'visit',
        component: Area,
        beforeEnter: requireAuth
    }
];

