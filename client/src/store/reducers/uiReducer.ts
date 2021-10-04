//in uiReducer.ts
import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from "../../types/ui";
const initialState = {
  loading: false,
  errors: null,
  authenticated: false,
};

export default function uiReducers(state = initialState, action: any) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
