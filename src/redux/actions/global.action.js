import GlobalConst from '../consts/global.const';

function loadingAction(){
    return {
        type: GlobalConst.LOADING
    }
}

function hideMenuAction(){
    return {
        type: GlobalConst.HIDE_MENU
    }
}

const GlobalAction = {
    loadingAction,
    hideMenuAction
}

export default GlobalAction;

