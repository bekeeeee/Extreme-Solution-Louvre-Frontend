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
      console.log("err", err);
    }
  };
};
