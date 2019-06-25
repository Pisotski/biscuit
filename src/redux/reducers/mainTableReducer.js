import { FETCH_MAINTABLE_BEGIN, FETCH_MAINTABLE_SUCCESS, FETCH_MAINTABLE_FAILURE } from '../constants/types/mainTable';

const initialState = {
  personalInfo: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MAINTABLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MAINTABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        personalInfo: action.payload.mainTable,
      };

    case FETCH_MAINTABLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        personalInfo: [],
      };

    default:
      return state;
  }
}
