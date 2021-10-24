import { ActionTypeUserList } from "../action-types/userListTypes";
import { CurrentUser } from "../state-types/currentUser";

interface UserListRequestAction {
  type: ActionTypeUserList.USER_LIST_REQUEST;
}
interface UserListSuccessAction {
  type: ActionTypeUserList.USER_LIST_SUCCESS;
  payload: CurrentUser[];
}
interface UserListFailAction {
  type: ActionTypeUserList.USER_LIST_FAIL;
  payload: string;
}

export type UserListAction =
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailAction;
