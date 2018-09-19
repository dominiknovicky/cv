import GlobalConsts from '../consts/global.consts';

function loadingAction(){
    return {
        type: GlobalConsts.LOADING
    }
}

function hideMenuAction(){
    return {
        type: GlobalConsts.HIDE_MENU
    }
}

const GlobalActions = {
    loadingAction,
    hideMenuAction
}

export default GlobalActions;

