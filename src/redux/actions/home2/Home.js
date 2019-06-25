import { FETCH_HOME_BEGIN, FETCH_HOME_SUCCESS, FETCH_HOME_FAILURE } from '../../constants/types/home';

export const fetchHomeBegin = () => ({
  type: FETCH_HOME_BEGIN,
});

export const fetchHomeSuccess = homeData => ({
  type: FETCH_HOME_SUCCESS,
  payload: { homeData },
});

export const fetchHomeFailure = error => ({
  type: FETCH_HOME_FAILURE,
  payload: { error },
});
