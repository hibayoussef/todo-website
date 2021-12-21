import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { SignUpReducer } from "../reducers/signup-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "../reducers/userReducer";
import { todoListReducer } from "../reducers/todo-list-reducer";
import { todoCardReducer } from "../reducers/todo-card-reducer";

const reducers = combineReducers({
  // userLoginReducer return a state
  createUser: SignUpReducer,
  userLogin: userLoginReducer,
  todoList: todoListReducer,
  todoCard: todoCardReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : undefined;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
} as {};

// allows as call dispatch function asynchronouly
// can access to getState and dispatch

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
