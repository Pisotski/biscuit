import {
  fetchMainTableBegin,
  fetchMainTableSuccess,
  fetchMainTableFailure,
} from './mainTable';
import { getCallApi } from '../../../utils/asyncRequestHandler';
import {
  FETCH_MAIN_TABLE_API,
} from '../../constants/api';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchMainTable() {
  return (dispatch) => {
    console.log('actions here');

    dispatch(fetchMainTableBegin());
    return getCallApi(FETCH_MAIN_TABLE_API)
      .then(handleErrors)
      // .then(res => res.json())
      .then((mainTable) => {
        dispatch(fetchMainTableSuccess(mainTable));
        return Promise.resolve(mainTable);
      })
      .catch((error) => {
        dispatch(fetchMainTableFailure(error));
        return Promise.reject(error);
      });
  };
}

export default fetchMainTable;
