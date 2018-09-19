import { combineReducers } from "redux";
import GlobalReducer from './global.reducers'

const rootReducer = combineReducers({
    globalReducer: GlobalReducer
});
export default rootReducer;
