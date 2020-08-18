import { combineReducers } from 'redux';
import infoProfile from "./infoProfile";
import auth from "./utilities/auth";


let rootReducer = combineReducers({
    auth,
    infoProfile,
})

export default rootReducer;