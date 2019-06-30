import { combineReducers } from 'redux';
import mainTable from './mainTable';
import subTable from './subTable';
import home from './home';

export default combineReducers({
  MainTable: mainTable,
  Home: home,
  SubTable: subTable,
});
