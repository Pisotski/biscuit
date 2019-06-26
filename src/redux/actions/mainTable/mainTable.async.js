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
  console.log(response)
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchMainTable() {
  return (dispatch) => {
    dispatch(fetchMainTableBegin());
    return getCallApi(FETCH_MAIN_TABLE_API)
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

export default fetchMainTable;
