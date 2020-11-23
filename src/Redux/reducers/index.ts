import { combineReducers } from 'redux';

import TimeReducer from './TimeReducer';

export const rootReducer = combineReducers({
  TimeReducer: TimeReducer,
});