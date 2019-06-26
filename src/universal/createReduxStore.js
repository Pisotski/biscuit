import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import reduxState from '../redux/reducers';

export default function createReduxStore({ preloadedState, server } = {}) {
  const axiosInstance = axios.create({
    baseURL: `${process.env.CONNECTION}/api`,
    // headers: { cookie: req.get('cookie') || ''},
  });
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    const composeEnhancers = typeof window === 'object'
    /* eslint-disable no-underscore-dangle */
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    /* eslint-enable no-underscore-dangle */
    enhancer = composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(axiosInstance)));
  } else {
    enhancer = applyMiddleware(thunkMiddleware.withExtraArgument(axiosInstance));
  }

  return createStore(reduxState, preloadedState, enhancer);
}
