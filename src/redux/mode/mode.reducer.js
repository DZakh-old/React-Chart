import { modeActionTypes } from './mode.types';
import {} from './mode.utils';
import { LIST_OF_MODES } from './mode.data';

const initialState = {
  curModeId: LIST_OF_MODES[0].id,
  modes: LIST_OF_MODES
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case modeActionTypes.switchMode:
      return {
        ...state,
        curModeId: action.payload.id
      };
    default:
      return state;
  }
};

export default modeReducer;
