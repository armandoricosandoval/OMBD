import { RECEIVE_PELICULAS, RECEIVE_PELIUNICA,CREATE_LIST } from '../constants';
import axios from 'axios';

const API = 'https://www.omdbapi.com/?apikey=20dac387'
const setPeliculas = peliculas => ({ type: RECEIVE_PELICULAS, payload: peliculas })

const selectPelis = peliUnica => ({ type: RECEIVE_PELIUNICA, payload: peliUnica })

const createList = crear => ({ type: CREATE_LIST, payload: crear })



export const fetchPeliculas = (title) => {
    return (dispatch) => {
        axios.get(`${API}&s=${title}`)
            .then(res => res.data)
            .then(peliculas => dispatch(setPeliculas(peliculas)));
    }
}

export const fetchPeliUnica = (id) => {
    return (dispatch) => {
        axios.get(`${API}&i=${id}`)
            .then(res => res.data)
            .then(selectPeliculas => dispatch(selectPelis(selectPeliculas)));

    }
}

export const fatchCreateList = (name) => {
    return (dispatch) => {
        axios.post(`/profile`,{name})
            .then(res => res.data)
            .then(selectPeliculas => dispatch(createList(selectPeliculas)));

    }
}
