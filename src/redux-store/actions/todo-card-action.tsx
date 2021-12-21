import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { CREATE_CARD, GET_SINGLE_CARD } from "../../constants/userConstants";
import TodoService from "../../services/todo.service";
import { RootState } from "../store/store";

export const createCard =
  (title: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: CREATE_CARD,
      });
      // fetch data from backend (new list) then i will pass it to the reducer info
      const response = TodoService.createList(title)
        .then((res) => {
          const cardData = {
            id: res.data.id,
            title: res.data.title,
            content: res.data.content,
            todoListId: res.data.todoListId,
          };

          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: CREATE_CARD,
            payload: cardData,
          });
          console.log("response: ", response);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };

export const getSingleCard =
  (id: number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: GET_SINGLE_CARD,
      });
      // fetch data from backend (new list) then i will pass it to the reducer info
      const response = TodoService.getSingleCard(id)
        .then((res) => {
          const cardData = {
            id: res.data.id,
            title: res.data.title,
            content: res.data.content,
            todoListId: res.data.todoListId,
          };

          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: GET_SINGLE_CARD,
            payload: cardData,
          });
          console.log("response: ", response);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
