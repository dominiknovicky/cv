import { combineReducers } from "redux";
import GlobalReducer from './global.reducers';
import MenuReducer from './menu.reducer';
import DataReducer from './data.reducer';

const rootReducer = combineReducers({
    globalReducer: GlobalReducer,
    menuReducer: MenuReducer,
    dataReducer: DataReducer
});

export default rootReducer;
