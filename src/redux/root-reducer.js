import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import jobsReducer from './jobs/jobs-reducer';
import modalsReducer from './modals/modals-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['jobs']
}

const rootReducer = combineReducers({
  jobs: jobsReducer,
  modals: modalsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;