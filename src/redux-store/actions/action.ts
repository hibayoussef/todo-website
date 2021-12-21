import { Dispatch } from "react";
import AuthService from "../../services/auth.service";

export type UserAction = { type: 'ADD_USER', payload: Object}
export type UserActionLOGIN = { type: 'SIGNIN_USER', payload: Object}

export const addUser = (email: string, name: string) => {
    const result =  async (dispatch: Dispatch<UserAction>) => {
        return AuthService.signup(email, name)
          .then((res) => {
          //  reducer start working
            dispatch({
              type: 'ADD_USER',
              payload: res.data  
            });
            return res.data;
          })
          .catch((err) => {
            console.log('err -4 : ', err);
            // return err
          });
      };
      return result;
      
}

export const login = (id: number, email: string, name: string) => {
  const result = async(dispatch: Dispatch<UserActionLOGIN>) => {
    return AuthService.login(id, email, name)
    .then((res) =>{
      localStorage.setItem('token', res.data)
      console.log('localStorage.setItem_token: ', localStorage.setItem('token', res.data));
      dispatch({
        type: 'SIGNIN_USER',
        payload: res.data
      })
      return res.data; 
    })
    .catch((err) => {
      console.log(err);
      // return err
    });
  }
  return result;
}

