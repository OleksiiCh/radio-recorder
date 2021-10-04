import axios from "axios";
import { SET_UNAUTHENTICATED } from "../../types/auth";
import { CLEAR_ERRORS, LOADING_UI, SET_ERRORS } from "../../types/ui";
import { LOADING_USER, SET_USER, UserActionTypes } from "../../types/user";

// console.log(process.env.REACT_APP_API_URL);

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
  dispatch({ type: LOADING_UI });

  axios
    .post(
      "/api/users/login",
      userData
      // {
      //   proxy: {
      //     host: "http://localhost",
      //     port: 5000,
      //   },
      // }
    )
    .then((res) => {
      console.log(res);

      const token = `Bearer ${res.data.userData.token}`;
      localStorage.setItem("token", `Bearer ${res.data.userData.token}`); //setting token to local storage
      axios.defaults.headers.common["Authorization"] = token; //setting authorize token to header in axios
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      console.log("success");
      history.push("/main"); //redirecting to index page after login success
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(
      "/api/users/auth"
      // {
      //   /* .get("/user", */
      //   proxy: {
      //     host: "http://localhost",
      //     port: 5000,
      //   },
      // }
    )
    .then((res) => {
      console.log("user data", res.data);
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: UserActionTypes.SET_AUTHENTICATED,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({ type: LOADING_UI });

  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: UserActionTypes.SET_UNAUTHENTICATED,
  });
  axios
    .get("/api/users/logout")
    .then((res) => {
      console.log("user logout data", res.data);
      // dispatch({
      //   type: UserActionTypes.SET_AUTHENTICATED,
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};
