import { UserAction } from "../actions/userAction";
import { ActionTypeUser } from "../action-types/userTypes";
import { CurrentUser } from "../state-types/currentUser";
interface CurrentUsertState {
  loading: boolean;
  error: Error | null;
  data: CurrentUser | null;
}
const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
  state: CurrentUsertState = initialState,
  action: UserAction
): CurrentUsertState => {
  switch (action.type) {
    case ActionTypeUser.CURRENT_USER:
      return { loading: false, error: null, data: action.payload };

    default:
      return state;
  }
};

export default reducer;
