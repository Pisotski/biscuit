import { FETCH_SUBTABLE_BEGIN, FETCH_SUBTABLE_SUCCESS, FETCH_SUBTABLE_FAILURE } from '../constants/types/subTable';

const initialState = {
  subTableData: [],
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SUBTABLE_BEGIN: {
      return {
        ...state,
        subTableData: [],
        loading: true,
        error: null,
      };
    }
    case FETCH_SUBTABLE_SUCCESS: {
      return {
        ...state,
        subTableData: action.payload.subTableData,
        loading: false,
      };
    }
    case FETCH_SUBTABLE_FAILURE: {
      return {
        ...state,
        subTableData: [],
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
