import {
  fetchSubTableBegin,
  fetchSubTableSuccess,
  fetchSubTableFailure,
} from './Subtable';
import { getCallApi } from '../../../utils/asyncRequestHandler';
import {
  FETCH_SUB_TABLE_API,
} from '../../constants/api';

export default function (url = FETCH_SUB_TABLE_API) {
  return (dispatch) => {
    dispatch(fetchSubTableBegin());
    return getCallApi(url)
      .then((subTableData) => {
        dispatch(fetchSubTableSuccess(subTableData));
        return Promise.resolve(subTableData);
      })
      .catch((error) => {
        dispatch(fetchSubTableFailure(error));
        return Promise.reject(error);
      });
  };
}
