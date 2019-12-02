import { createSelector } from 'reselect';

const selectMode = state => state.mode;

export const selectCurMode = createSelector([selectMode], mode => mode.curMode);

export const selectModes = createSelector([selectMode], mode => mode.modes);
