import {
    combineReducers,
    compose,
    legacy_createStore as createStore
} from "redux"

import { userService } from "../services/user.service.js"
import { toyReducer } from "./reducers/toy.reducer.js"
import { userReducer } from "./reducers/user.reducer.js"



const rootReducer = combineReducers({
    toyModule: toyReducer,
    userModule: userReducer
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store