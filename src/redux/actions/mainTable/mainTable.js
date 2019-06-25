import { FETCH_MAINTABLE_BEGIN, FETCH_MAINTABLE_SUCCESS, FETCH_MAINTABLE_FAILURE } from '../../constants/types/mainTable';

export const fetchMainTableBegin = () => ({
  type: FETCH_MAINTABLE_BEGIN,
});

export const fetchMainTableSuccess = mainTable => ({
  type: FETCH_MAINTABLE_SUCCESS,
  payload: { mainTable },
});

export const fetchMainTableFailure = error => ({
  type: FETCH_MAINTABLE_FAILURE,
  payload: { error },
});
