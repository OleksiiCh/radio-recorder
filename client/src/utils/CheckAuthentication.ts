//in CheckAuthentication.ts
import jwtDecode from "jwt-decode"; //you must install jwt-decode using npm

import { store } from "../store";
import axios from "axios";
import { SET_AUTHENTICATED } from "../types/auth";
import { getUserData, logoutUser } from "../store/actions/userActions";

export const CheckAuthentication = () => {
  let authToken = localStorage.token;
  if (authToken) {
    authToken = authToken.replace("Bearer ", "");
    const decodedToken: any = jwtDecode(authToken, { header: true });
    console.log(decodedToken.iss);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = authToken;
      store.dispatch(getUserData());
    }
  }
};
