import { CREATE_CARD, GET_SINGLE_CARD } from "../../constants/userConstants";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface CardState {
  cardData: { title?: string };
}

interface Action {
  type: string;
  payload?: string;
}

export const todoCardReducer = (
  state: CardState = { cardData: {} },
  action: Action
) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        // modified state
        cardData: action.payload,
      };
    case GET_SINGLE_CARD:
      return {
        cardData: action.payload,
      };
    default:
      return { state };
  }
};
