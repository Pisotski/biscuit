import {
  fetchMainTableBegin,
  fetchMainTableSuccess,
  fetchMainTableFailure,
} from './MainTable';
import { getCallApi } from '../../../utils/asyncRequestHandler';
import {
  FETCH_MAIN_TABLE_API,
} from '../../constants/api';

// function handleErrors(response) {
//   console.log(response)
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export default function (url = FETCH_MAIN_TABLE_API) {
  return (dispatch) => {
    dispatch(fetchMainTableBegin());
    return getCallApi(url)
      .then((mainTableData) => {
        dispatch(fetchMainTableSuccess(mainTableData));
        return Promise.resolve(mainTableData);
      })
      .catch((error) => {
        dispatch(fetchMainTableFailure(error));
        return Promise.reject(error);
      });
  };
}
