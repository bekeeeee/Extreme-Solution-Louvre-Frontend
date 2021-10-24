import { ActionTypeUser } from "../action-types/userTypes";
import { CurrentUser } from "../state-types/currentUser";

interface UserCurrent {
  type: ActionTypeUser.CURRENT_USER;
  payload: CurrentUser | null;
}

export type UserAction = UserCurrent;
