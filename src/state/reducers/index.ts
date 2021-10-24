import { combineReducers } from "redux";

import userReducer from "./authReducer";
import artReducer from "./artReducer";
import artDetailsReducer from "./artDetailsReducer";
import listUserReducer from "./listUserReducer";

const reducers = combineReducers({
  userInfo: userReducer,
  userList: listUserReducer,
  artList: artReducer,
  artDetails: artDetailsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
