import {RECEIVE_USER,RECEIVE_USERS,CREATE_USERS} from '../constants'
import axios from 'axios';

const setUsers = Users => ({ type: RECEIVE_USERS, payload: Users })
const selectUser = User => ({ type: RECEIVE_USER, payload: User  })
const addUser = newUser => ({ type: CREATE_USERS, payload: newUser  })

export const fetchUsers= () => {
    return (dispatch) => {
        axios.get('/register')
            .then(res => res.data)
            .then(Users => dispatch(setUsers(Users)));
    }
}



export const fetchUser = (email,password) => {
    return (dispatch) => {
        return axios.post('/login',{email:email,password:password})
            .then(res => res.data)
            .then(User => dispatch(selectUser(User)));
    }
}


export const fetchOutUser = () => {
    return (dispatch) => {
        return axios.post('/logout')
            .then(() => dispatch(selectUser({})));
    }
}



export const createUsers= (email,password) => {
    return (dispatch) => {
       return axios.post('/register',{email:email,password:password})
            .then(res => 
                 res.data
            )
            .then(Users => dispatch(addUser(Users)));
    }
}

