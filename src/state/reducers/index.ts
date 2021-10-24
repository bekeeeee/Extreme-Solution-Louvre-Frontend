import { combineReducers } from "redux";

import userReducer from "./authReducer";


const reducers = combineReducers({

  userInfo: userReducer,

});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
