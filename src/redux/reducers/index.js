import { combineReducers } from 'redux';
import home from './home';
import mainTableReducer from './mainTableReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  MainTable: mainTableReducer,
  homeOld: home,
  Home: homeReducer,
});
