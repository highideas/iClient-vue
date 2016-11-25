import ClientList from '../../components/Client/ClientList.vue'
import auth from '../../auth'

export default {
    'path' : '/client',
    component: ClientList,
    beforeEnter: auth.requireAuth,
}

