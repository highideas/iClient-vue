import VisitCreate from '../../components/Visit/VisitCreate.vue'
import auth from '../../auth'

export default {
    'path' : '/visit/create/:id',
    component: VisitCreate,
    beforeEnter: auth.requireAuth,
}
