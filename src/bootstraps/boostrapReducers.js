import { combineReducers } from "redux";
import { authReducers } from "../modules/auth/authReducers";
export const boostrapReducers = combineReducers({
  auth: authReducers,
});
