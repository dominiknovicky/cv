import { combineReducers } from "redux";
import GlobalReducer from './global.reducers'
import MenuReducer from './menu.reducer'

const rootReducer = combineReducers({
    globalReducer: GlobalReducer,
    menuReducer: MenuReducer
});

export default rootReducer;
