import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { movieByIdReducer } from './movieByIdReducer'
export let allReducers=combineReducers({
    moviesReducer:moviesReducer,
    movieByIdReducer:movieByIdReducer
})