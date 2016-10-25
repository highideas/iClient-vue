export default {
    loggedIn () {
        return !!localStorage.token
    },
    requireAuth (to, from, next) {
        if (!localStorage.token) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    }
};
