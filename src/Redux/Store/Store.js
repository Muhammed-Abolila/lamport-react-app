import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk"
import { allReducers } from "../Reducers/AllReducers";
export let store=createStore(allReducers,applyMiddleware(thunk))