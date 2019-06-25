import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import reduxState from '../redux/reducers';

const loggerMiddleware = createLogger();

export default function createReduxStore({ preloadedState, server } = {}) {
  const axiosInstance = axios.create({
    baseURL: `${process.env.CONNECTION}/api`,
    // headers: { cookie: req.get('cookie') || ''},
  });
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    enhancer = applyMiddleware(thunkMiddleware.withExtraArgument(axiosInstance), loggerMiddleware);
  } else {
    enhancer = applyMiddleware(thunkMiddleware.withExtraArgument(axiosInstance));
  }

  return createStore(reduxState, preloadedState, enhancer);
}
