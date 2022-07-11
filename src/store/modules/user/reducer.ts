import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./../../../constants/userConstants";

export type UserState = {
  loading?: boolean;
  error?: string;
  userInfo: {
    id: string;
    name: string;
    birthdate: string;
    gender: string;
  };
};

type Action = {
  type: string;
  payload?: string;
};

export const userLoginReducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;
