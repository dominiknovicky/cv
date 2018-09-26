import DataConst from '../consts/data.const';

const initialState = []

function dataReducer(state = initialState, action = {}) {
    switch (action.type) {
      case DataConst.DATA:
        return action.data;
      default:
        return state;
    }
  }

export default dataReducer;
