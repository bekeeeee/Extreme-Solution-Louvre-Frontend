import { Dispatch } from "redux";

import axios from "axios";

import { ActionTypeUser } from "../action-types/userTypes";
import { UserAction } from "../actions/userAction";
import { CurrentUser } from "../state-types/currentUser";
import { ArtsAction } from "../actions/artsAction";
import { ActionTypeArts } from "../action-types/artsActionTypes";
import { Art } from "../state-types/art";
import { ArtDetailsAction } from "../actions/artDetailsAction";
import { ActionTypeArtDetails } from "../action-types/artDetailsTypes";
import { RootState } from "..";
import { UserListAction } from "../actions/userListAction";
import { ActionTypeUserList } from "../action-types/userListTypes";

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

// list arts
export const listArts = () => {
  const instance = axios.create({
    withCredentials: true,
  });
  return async (dispatch: Dispatch<ArtsAction>) => {
    dispatch({
      type: ActionTypeArts.ART_LIST_REQUEST,
    });

    try {
      const { data }: any = await instance.get("/api/v1/art");
      const arts: Art[] = data?.data;
      dispatch({
        type: ActionTypeArts.ART_LIST_SUCCESS,
        payload: arts,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypeArts.ART_LIST_FAIL,
        payload: err.message,
      });
    }
  };
};

export const clearArtDetail = () => {
  return async (dispatch: Dispatch<ArtDetailsAction>) => {
    try {
      dispatch({
        type: ActionTypeArtDetails.ART_DETAILS_CLEAR,
        payload: null,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypeArtDetails.ART_DETAILS_FAIL,
        payload: err.message,
      });
    }
  };
};

export const artDetails = (artId: string) => {
  return async (
    dispatch: Dispatch<ArtDetailsAction>,
    getState: () => RootState
  ) => {
    dispatch({
      type: ActionTypeArtDetails.ART_DETAILS_REQUEST,
    });

    try {
      const data = await getState().artList.data.find(
        (art: Art) => art.id === artId
      );
      dispatch({
        type: ActionTypeArtDetails.ART_DETAILS_SUCCESS,
        payload: data!,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypeArtDetails.ART_DETAILS_FAIL,
        payload: err.message,
      });
    }
  };
};

export const deleteArtItem = (itemId: string) => {
  const instance = axios.create({
    withCredentials: true,
  });
  return async (dispatch: Dispatch<ArtsAction>, getState: () => RootState) => {
    try {
      if (getState().userInfo.data?.role === "admin") {
        await instance.delete(`/api/v1/art/${itemId}`);
      } else {
        return dispatch({
          type: ActionTypeArts.ART_DELTE_ITEM_FAIL,
          payload: "Can't delete",
        });
      }

      dispatch({
        type: ActionTypeArts.ART_DELTE_ITEM,
        payload: itemId,
      });
    } catch (err) {
      console.log("err", err);
    }
  };
};

export const listUsers = () => {
  const instance = axios.create({
    withCredentials: true,
  });
  return async (dispatch: Dispatch<UserListAction>) => {
    dispatch({
      type: ActionTypeUserList.USER_LIST_REQUEST,
    });

    try {
      const { data }: any = await instance.get("/api/v1/user");
      const users: CurrentUser[] = data?.data;
      dispatch({
        type: ActionTypeUserList.USER_LIST_SUCCESS,
        payload: users,
      });
    } catch (err: any) {
      console.log("errorrrrrrrr", err);
      dispatch({
        type: ActionTypeUserList.USER_LIST_FAIL,
        payload: err.message,
      });
    }
  };
};
