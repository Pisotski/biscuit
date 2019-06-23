import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import reduxState from '../redux/reducers';

const loggerMiddleware = createLogger();

export default function createReduxStore({ preloadedState, server } = {}, req) {
  let enhancer;
  let thunkProperties = thunkMiddleware;

  if (req) {
    const axiosInstance = axios.create({
      baseURL: '/api',
      headers: { cookie: req.get('cookie') || '' },
    });
    thunkProperties = thunkMiddleware.withExtraArgument(axiosInstance);
  }

  if (process.env.NODE_ENV !== 'production' && !server) {
    enhancer = applyMiddleware(thunkProperties, loggerMiddleware);
  } else {
    enhancer = applyMiddleware(thunkProperties);
  }

  return createStore(reduxState, preloadedState, enhancer);
}
