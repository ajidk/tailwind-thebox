import { AUTH_CONSTANT } from "./authConstants";
import { authInitialState } from "./authInitialState";
const initialState = {
  ...authInitialState,
  action: "",
};

export const authReducers = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("TYPE: ", type, "PAYLOAD:", payload);
  const actions = {
    [AUTH_CONSTANT]: () => ({
      ...state,
      authState: payload.value,
      action: type,
    }),

    DEFAULT: () => state,
  };
  return (actions[type] || actions.DEFAULT)();
};
