import ClientShow from '../../components/Client/ClientShow.vue'
import auth from '../../auth'

export default {
    'path' : '/client/:id',
    component: ClientShow,
    beforeEnter: auth.requireAuth,
}

