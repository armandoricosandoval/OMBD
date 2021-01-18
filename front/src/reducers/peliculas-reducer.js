import {RECEIVE_PELICULAS, RECEIVE_PELIUNICA,CREATE_LIST} from '../constants'


const initialState={
    peliculas:[],
    selectPelis:{},
    list:[]

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PELICULAS:return{...state, peliculas:action.payload}
        case RECEIVE_PELIUNICA:return{...state, selectPelis:action.payload}
        case CREATE_LIST: return { ...state, list : [...state.list, action.payload] }
        default:return state
    }}