import { FETCH_MAINTABLE_BEGIN, FETCH_MAINTABLE_SUCCESS, FETCH_MAINTABLE_FAILURE } from '../constants/types/mainTable';

const initialState = {
  mainTableData: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MAINTABLE_BEGIN: {
      return {
        ...state,
        mainTableData: [],
        loading: true,
        error: null,
      };
    }
    case FETCH_MAINTABLE_SUCCESS: {
      return {
        ...state,
        mainTableData: action.payload.mainTableData,
        loading: false,
      };
    }
    case FETCH_MAINTABLE_FAILURE: {
      return {
        ...state,
        mainTableData: [],
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
