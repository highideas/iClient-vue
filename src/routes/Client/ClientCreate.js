import ClientCreate from '../../components/Client/ClientCreate.vue'
import auth from '../../auth'

export default {
    'path' : '/client/create',
    component: ClientCreate,
    beforeEnter: auth.requireAuth,
}
