import { RootState } from "./../../index";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../../../constants/userConstants";

import { api } from "../../../services/api";

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });

      const response = await api.post("/sign-in");

      const { token, user } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const userData = {
        id: user.id,
        name: user.name,
        birthdate: user.birthdate,
        gender: user.gender,
      };

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
