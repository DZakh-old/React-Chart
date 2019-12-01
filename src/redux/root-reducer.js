import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modeReducer from './mode/mode.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['mode']
};

const rootReducer = combineReducers({
  mode: modeReducer
});

export default persistReducer(persistConfig, rootReducer);
