import VisitCreate from '../../components/Visit/VisitShow.vue'
import auth from '../../auth'

export default {
    'path' : '/visit/create',
    component: VisitCreate,
    beforeEnter: auth.requireAuth,
}
