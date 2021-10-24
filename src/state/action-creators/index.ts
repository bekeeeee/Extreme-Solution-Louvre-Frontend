import { Dispatch } from "redux";

import axios from "axios";

import { ActionTypeUser } from "../action-types/userTypes";
import { UserAction } from "../actions/userAction";
import { CurrentUser } from "../state-types/currentUser";

// get current user
export const currentUser = () => {
  const instance = axios.create({
    withCredentials: true,
  });

  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data }: any = await instance.get("/api/v1/user/currentUser", {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const currentUser: CurrentUser = data?.data;

      dispatch({
        type: ActionTypeUser.CURRENT_USER,
        payload: currentUser,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypeUser.USER_SIGNIN_FAIL,
        payload: err.response.data.errors,
      });
    }
  };
};

// login
export const login = (username: string, password: string) => {
  const instance = axios.create({
    withCredentials: true,
  });
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: ActionTypeUser.USER_SIGNIN_REQUEST,
      payload: { username, password },
    });
    try {
      const { data }: any = await instance.post("/api/v1/user/login", {
        username,
        password,
      });
      const user: CurrentUser = data.data;
      dispatch({
        type: ActionTypeUser.USER_SIGNIN_SUCCESS,
        payload: user,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypeUser.USER_SIGNIN_FAIL,
        payload: err.response.data.errors,
      });
    }
  };
};
