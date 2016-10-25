import VisitShow from '../../components/Visit/VisitShow.vue'
import auth from '../../auth'

export default {
    'path' : '/visit/:id',
    component: VisitShow,
    beforeEnter: auth.requireAuth,
}
