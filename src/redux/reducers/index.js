import { combineReducers } from 'redux';
import mainTable from './mainTable';
import home from './home';

export default combineReducers({
  MainTable: mainTable,
  Home: home,
});
