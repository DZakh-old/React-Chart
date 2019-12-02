import { modeActionTypes } from './mode.types';
import {} from './mode.utils';
import { LIST_OF_MODES } from './mode.data';

const initialState = {
  curMode: LIST_OF_MODES[0],
  modes: LIST_OF_MODES
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case modeActionTypes.switchMode:
      return {
        ...state,
        curMode: action.payload
      };
    default:
      return state;
  }
};

export default modeReducer;
