import GlobalConst from '../consts/global.const';

const initialState = {
    loading: true,
    hideMenu: true
}

function globalReducer(state = initialState, action = {}){
    switch(action.type){
        case GlobalConst.LOADING:
            return { ...state, loading: false}

        case GlobalConst.HIDE_MENU:
            return { ...state, hideMenu: false}

        default: return state;
    }
}

export default globalReducer;