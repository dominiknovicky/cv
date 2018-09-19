import GlobalConsts from '../consts/global.consts';

const initialState = {
    loading: true,
    hideMenu: true
}

function globalReducer(state = initialState, action = {}){
    switch(action.type){
        case GlobalConsts.LOADING:
            return { ...state, loading: false}

        case GlobalConsts.HIDE_MENU:
            return { ...state, hideMenu: false}

        default: return state;
    }
}

export default globalReducer;