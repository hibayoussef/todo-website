import {
  default as axios,
  AxiosRequestConfig
} from "axios";
import  authHeader  from "./auth-header";

async function createList(title: string) {
  const data = { title };
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo-list";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.post(url, data, requestConfig);
  return response;
}

// create cards
async function createCard(title: string, content: string, todoListId: number) {
  const data = {
    title,
    content,
    todoListId,
  };
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.post(url, data, requestConfig);
  return response;
}

// get all columns
async function getAllLists() {
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.get(url, requestConfig);
  return response;
}

// const getListById = (id: number) => {
//   return axios.get(API_URL + `/api/v1/todo-list/${id}`);
// };

// get single list that means get all the cards inside list
async function getAllCardsInsideColumn(todoListId: number) {
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo-list";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.get(
    `${url}?todoListId=${todoListId}`,
    requestConfig
  );

  return response;
}

async function getSingleCard(id: number) {
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.get(`${url}/${id}`, requestConfig);
  return response;
}

// remove list
async function removeList(id: number) {
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo-list";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.delete(`${url}/${id}`, requestConfig);
  return response;
}

// remove card
async function removeCard(id: number) {
  const url =
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/todo";
  const requestConfig: AxiosRequestConfig = { headers: authHeader() };
  const response = await axios.delete(`${url}/${id}`, requestConfig);
  return response;
}

const TodoService = {
  createList,
  getAllLists,
  createCard,
  getAllCardsInsideColumn,
  removeList,
  removeCard,
  getSingleCard,
};

export default TodoService;
