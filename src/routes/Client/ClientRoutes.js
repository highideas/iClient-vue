import Client from '../../components/Client/Client.vue'
import auth from '../../auth'

export default [{
        'path': '/client',
        component: Client,
        beforeEnter: auth.requireAuth,
        children: [
            {
                'path': '/create',
                component: Client
            }
        ]
}]
