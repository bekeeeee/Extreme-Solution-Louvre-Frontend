import { combineReducers } from "redux";

import userReducer from "./authReducer";
import artReducer from "./artReducer";
import artDetailsReducer from "./artDetailsReducer";

const reducers = combineReducers({
  userInfo: userReducer,
  artList: artReducer,
  artDetails: artDetailsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
