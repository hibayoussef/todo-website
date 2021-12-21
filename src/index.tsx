import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-store/store/store";
import axios from 'axios';

axios.defaults.baseURL = 'http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1';
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem('token');
    
axios.defaults.headers.get["Accepts"] = "application/json";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
