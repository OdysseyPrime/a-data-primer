import {combineReducers, createStore} from "redux"
import {routerReducer} from "react-router-redux"
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory({
    basename: BASE_URL
})

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const reducers = combineReducers({
    routing: routerReducer
})

const store = createStore(reducers)

export {
    history
}

export default store