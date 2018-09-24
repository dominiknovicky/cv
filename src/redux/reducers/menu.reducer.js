import MenuConst from '../consts/menu.const';

const initialState = []

function menuReducer(state = initialState, action = {}) {
    switch (action.type) {
      case MenuConst.FIREBASE:
        return action.data;
      default:
        return state;
    }
  }

export default menuReducer;
