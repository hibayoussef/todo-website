import {
  USER_LOGIN_SUCCESS,
} from "../../constants/userConstants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store/store";
import AuthService from "../../services/auth.service";

// we recieve email and name from component
export const login =
  (
    id: number,
    email: string,
    name: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_SUCCESS,
      });
      // fetch data from backend
      const response = AuthService.login(id, email, name)
        .then((res) => {
          const userData = {
            id: res.data.id,
            email: res.data.email,
            name: res.data.name,
          };
          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userData,
          });
          localStorage.setItem("userInfo", JSON.stringify(userData));
          console.log('response: ', response)
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
