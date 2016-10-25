import auth from '../../auth'
import Visit from '../../components/Visit/Visit.vue'

export default {
    'path' : '/visits',
    component: Visit,
    beforeEnter: auth.requireAuth,
}
