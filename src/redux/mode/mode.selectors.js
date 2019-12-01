import { createSelector } from 'reselect';

const selectMode = state => state.mode;

export const selectCurModeId = createSelector([selectMode], mode => mode.curModeId);

export const selectModes = createSelector([selectMode], mode => mode.modes);
