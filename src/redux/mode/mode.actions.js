import { modeActionTypes } from './mode.types';

export const switchMode = newMode => ({
  type: modeActionTypes.switchMode,
  payload: newMode
});
