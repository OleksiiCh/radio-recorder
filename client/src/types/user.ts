export interface IUserState {
  user: any[];
  loading: boolean;
  error: null | string;
  authenticated: null | boolean;
}
export enum UserActionTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  SET_AUTHENTICATED = "SET_AUTHENTICATED",
  SET_UNAUTHENTICATED = "SET_UNAUTHENTICATED",
}

interface IFetchUserAction {
  type: UserActionTypes.FETCH_USER;
}
interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: any[];
}
interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}
interface ISetAuthenticatedAction {
  type: UserActionTypes.SET_AUTHENTICATED;
  payload: string;
}
interface ISetUnauthenticatedAction {
  type: UserActionTypes.SET_UNAUTHENTICATED;
  payload: string;
}
export type IUserAction =
  | IFetchUserAction
  | IFetchUserErrorAction
  | IFetchUserSuccessAction
  | ISetAuthenticatedAction
  | ISetUnauthenticatedAction;

export const SET_USER = "SET_USER";
export const LOADING_USER = "LOADING_USER";
