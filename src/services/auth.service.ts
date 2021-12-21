import axios from "axios";

async function signup(email: string, name: string) {
  const response = await axios.post(
    "http://ec2-18-132-52-86.eu-west-2.compute.amazonaws.com/api/v1/authentication/sign-up",
    { email, name }
  );
  console.log("service-2: ", response);
  console.log("service-2: ", response.data);
  return response;
}

async function login(id: number, email: string, name: string) {
  const response = await axios.post(
    "/authentication/login",
    { id, email, name }
    ,{
    headers: {
      "Content-Type": "application/json",
    },
    }
  );
  return response;
}

async function getCurrentUser() {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) return JSON.parse(userInfo);

  return null;
}
//   console.log('service.login: ', response);
//   console.log('service.login.data: ', response.data);
//   return response;
// }
// const login = (id: number, email: string, name: string) => {
//   return axios
//     .post(API_URL + "/authentication/login", { id, email, name })
//     .then((res) => {
//       if (res.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(res.data));
//       }

//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const AuthService = {
  signup,
  login,
  getCurrentUser
};

export default AuthService;
