import { ActionTypeUser } from "../action-types/userTypes";
import { CurrentUser } from "../state-types/currentUser";
import { LoginInputs } from "../state-types/loginInputs";

interface UserCurrent {
  type: ActionTypeUser.CURRENT_USER;
  payload: CurrentUser | null;
}

interface UserSigninRequest {
  type: ActionTypeUser.USER_SIGNIN_REQUEST;
  payload: LoginInputs;
}

interface UserSigninSuccess {
  type: ActionTypeUser.USER_SIGNIN_SUCCESS;
  payload: CurrentUser;
}

interface UserSigninFail {
  type: ActionTypeUser.USER_SIGNIN_FAIL;
  payload: Error;
}

export type UserAction =
  | UserCurrent
  | UserSigninRequest
  | UserSigninSuccess
  | UserSigninFail;
