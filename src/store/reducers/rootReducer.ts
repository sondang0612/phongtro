import { Reducer, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import userReducer from './userReducer';
const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: 'auth',
  whitelist: ['isLoggedIn', 'token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer as Reducer),
  user: userReducer,
});

export default rootReducer;
