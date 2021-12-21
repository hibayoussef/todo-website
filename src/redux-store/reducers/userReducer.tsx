import {
  USER_LOGIN_SUCCESS
} from "../../constants/userConstants";

// i make userState to use it in other components
export interface UserState {
  // loading state
  loading?: boolean;
  error?: string;
  userInfo: { id?: number; name?: string; email?: string };
}

interface Action {
  type: string;
  payload?: string;
}
export const userLoginReducer = (
  state: UserState = { userInfo: {} },
  action: Action
) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        // not loading the page anymore
        loading: false,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
