import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modeReducer from './mode/mode.reducer';
import chartReducer from './chart/chart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['chart']
};

const rootReducer = combineReducers({
  mode: modeReducer,
  chart: chartReducer
});

export default persistReducer(persistConfig, rootReducer);
