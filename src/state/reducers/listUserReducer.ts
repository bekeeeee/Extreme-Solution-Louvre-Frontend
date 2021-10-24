import { ActionTypeUserList } from "../action-types/userListTypes";
import { UserListAction } from "../actions/userListAction";
import { CurrentUser } from "../state-types/currentUser";

// import { State, defaultState } from "../stateType";
interface ListUserState {
  loading: boolean;
  error: Error | null;
  data: CurrentUser[];
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: ListUserState = initialState,
  action: UserListAction
): ListUserState => {
  switch (action.type) {
    case ActionTypeUserList.USER_LIST_REQUEST: {
      console.log("USER_LIST_REQUEST");
      return { loading: true, error: null, data: [] };
    }
    case ActionTypeUserList.USER_LIST_SUCCESS: {
      console.log("USER_LIST_SUCCESS", action.payload);

      return { loading: false, error: null, data: action.payload };
    }

    case ActionTypeUserList.USER_LIST_FAIL: {
      console.log("USER_LIST_FAIL");

      return { loading: false, error: action.payload, data: [] };
    }

    default:
      return state;
  }
};

export default reducer;
