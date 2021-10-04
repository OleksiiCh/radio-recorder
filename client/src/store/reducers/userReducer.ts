import { IUserAction, IUserState, UserActionTypes } from "../../types/user";

const initialState: IUserState = {
  user: [],
  loading: false,
  error: null,
  authenticated: false,
};

export const userReducer = (
  state = initialState,
  action: IUserAction
): IUserState | undefined => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { ...state, loading: true, error: null, user: [] };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };
    case UserActionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case UserActionTypes.SET_UNAUTHENTICATED:
      return initialState;
    case UserActionTypes.FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload, user: [] };
    default:
      return state;
  }
};
