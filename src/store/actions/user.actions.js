import { userService } from "../../services/user.service.js"
import { SET_USER, UPDATE_USER } from "../reducers/user.reducer.js"
import { store } from "../store.js"

export function login(credentials) {
    return userService.login(credentials)
        .then((user)=> {
            store.dispatch({type: SET_USER, user})
        })
        .catch((err) => {
            console.log('user actions -> Cannot login', err)
            throw err
        })
}

export function signup(credentials) {
    return userService.signup(credentials)
        .then((user)=> {
            store.dispatch({type: SET_USER, user})
        })
        .catch((err) => {
            console.log('user actions -> Cannot signup', err)
            throw err
        })
}

export function logout(credentials) {
    return userService.logout(credentials)
        .then((user)=> {
            store.dispatch({type: SET_USER, user: null})
        })
        .catch((err) => {
            console.log('user actions -> Cannot logout', err)
            throw err
        })
}

export function updateUser(user){
    console.log('user from update:', user)
    return userService._setLoggedinUser(user)
    .then((savedUser) => {
        store.dispatch({ type: UPDATE_USER, user: user })        
    })
    
}