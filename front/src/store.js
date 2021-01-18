import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {reducer as peliculasReducer } from './reducers/peliculas-reducer';
import {reducer as usersReducer } from './reducers/users-reducer';


const combine = combineReducers({
    peliculas:peliculasReducer,
    users:usersReducer
 });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combine, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)))