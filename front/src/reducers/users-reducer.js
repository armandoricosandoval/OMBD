import {RECEIVE_USER,RECEIVE_USERS,CREATE_USERS} from '../constants'

const initialState={
    users:{},
    user:{}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_USER:return{...state, user:action.payload}
        case RECEIVE_USERS:return{...state, users:action.payload}
        case CREATE_USERS:return{...state, users:action.payload}
        default:return state
    }}