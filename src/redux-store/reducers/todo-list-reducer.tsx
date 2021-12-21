import {
  CREATE_LIST,
  GET_ALL_CARDS_INSIDE_LIST,
  GET_ALL_LISTS,
} from "../../constants/userConstants";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface ListState {
  listData: { title?: string };
}

interface Action {
  type: string;
  payload?: string;
}

export const todoListReducer = (
  state: ListState = { listData: {} },
  action: Action
) => {
  switch (action.type) {
    case CREATE_LIST:
      return {
        // modified state
        listData: action.payload,
      };
    case GET_ALL_LISTS:
      return {
        listData: action.payload,
      };
    case GET_ALL_CARDS_INSIDE_LIST:
      return {
        listData: action.payload,
      };
    default:
      return { state };
  }
};
