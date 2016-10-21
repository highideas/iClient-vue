import Home from '../../components/Home/Home.vue'
import auth from '../../auth'

export default [{
    'path': '/',
    component: Home,
    beforeEnter: auth.requireAuth
}]
