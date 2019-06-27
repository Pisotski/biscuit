import { FETCH_SUBTABLE_BEGIN, FETCH_SUBTABLE_SUCCESS, FETCH_SUBTABLE_FAILURE } from '../../constants/types/subTable';

export const fetchSubTableBegin = () => ({
  type: FETCH_SUBTABLE_BEGIN,
});

export const fetchSubTableSuccess = subTableData => ({
  type: FETCH_SUBTABLE_SUCCESS,
  payload: { subTableData },
});

export const fetchSubTableFailure = error => ({
  type: FETCH_SUBTABLE_FAILURE,
  payload: { error },
});
