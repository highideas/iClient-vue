import ClientRoutes from './Client/ClientRoutes'
import HomeRoutes from './Home/HomeRoutes'
import LoginRoutes from './Login/LoginRoutes'
import AreaRoutes from './Area/AreaRoutes'
import VisitRoutes from './Visit/VisitRoutes'

function addRoutes(state = [], action) {
    switch(action.type) {
        case "ADD_ROUTES": 
            return [...state,...action.routes];
        default:
            return state;
    }
}

let createStore = function(reducer) {
    let state;
    let listeners = [];
    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener(action));
    }

    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    }

    return { getState, dispatch, subscribe};
}

let routes = createStore(addRoutes);

routes.dispatch({ type: "ADD_ROUTES", routes: VisitRoutes });
routes.dispatch({ type: "ADD_ROUTES", routes: ClientRoutes });
routes.dispatch({ type: "ADD_ROUTES", routes: HomeRoutes });
routes.dispatch({ type: "ADD_ROUTES", routes: LoginRoutes });
routes.dispatch({ type: "ADD_ROUTES", routes: AreaRoutes });

export default routes.getState();
/*
export default [
    {path: '', components: Component}

    {path: '/visit/:id', components: Component}
    {path: '/visit/create', components: Component}
    {path: '/listvisits', components: Component}

    {path: '/client/:id', components: Component}
    {path: '/listClient', components: Component}
    {path: '/client/ctreate', components: Component}

    {path: '', components: Component}
    {path: '', components: Component}
];*/

