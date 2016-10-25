import Area from '../../components/Area/Areas.vue'
import auth from '../../auth'

export default [{
    'path': '/area',
    component: Area,
    beforeEnter: auth.requireAuth
}]
