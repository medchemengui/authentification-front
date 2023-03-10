import { combineReducers } from "redux";
import Reducer from './Reducer'
import ErrorReducer from "./ErrorReducer";


const rootreducer=combineReducers({
   Reducer,ErrorReducer
})

export default rootreducer