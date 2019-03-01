import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth', 'nav']
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: []
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, loginReducer),
  nav,
  testApi,
  homeReducer,
  // loginReducer,
  accountReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
