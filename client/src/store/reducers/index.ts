import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
