import {
  fetchHomeBegin,
  fetchHomeSuccess,
  fetchHomeFailure,
} from './Home';
import { getCallApi } from '../../../utils/asyncRequestHandler';
import {
  FETCH_HOME_API,
} from '../../constants/api';

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }
// @TODO ADD ERROR HANDLER

export default function (url = FETCH_HOME_API) {
  return (dispatch) => {
    dispatch(fetchHomeBegin());
    return getCallApi(url)
      .then((home) => {

        dispatch(fetchHomeSuccess(home));
        return Promise.resolve(home);
      })
      .catch((error) => {
        dispatch(fetchHomeFailure(error));
        return Promise.reject(error);
      });
  };
}
