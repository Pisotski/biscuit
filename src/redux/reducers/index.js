// import { combineReducers } from 'redux';
// import home from './home';
// import about from './about';

// const reduxState = combineReducers({
//   home,
//   about
// });

// export default reduxState;

import { combineReducers } from 'redux';
import mainReducer from './mainTableReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  // mainTable: mainReducer,
  Home: homeReducer,
});
