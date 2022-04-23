import { AUTH_SUCCESS, LOGOUT } from "../types";

const INIT_STATE = {
  userData: {},
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...INIT_STATE,
      };
    default:
      return state;
  }
};

export default authReducer;
