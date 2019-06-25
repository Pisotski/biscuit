import {
  FETCH_HOME_FAILURE,
  FETCH_HOME_BEGIN,
  FETCH_HOME_SUCCESS,
} from '../constants/types/home';

const intialState = {
  homeData: [],
  loading: false,
  error: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_HOME_BEGIN: {
      return {
        ...state,
        homeData: [],
        loading: true,
        error: null,
      };
    }

    case FETCH_HOME_SUCCESS: {
      return {
        ...state,
        homeData: action.payload.homeData,
        loading: false,
      };
    }

    case FETCH_HOME_FAILURE: {
      return {
        ...state,
        homeData: [],
        error: action.payload.error,
        loading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
