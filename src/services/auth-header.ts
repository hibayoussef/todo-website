export default function authHeader(){
  const userInfo = localStorage.getItem('userInfo');
  let user= null;
  if(userInfo){
      // convert strng to Object 
      user = JSON.parse(userInfo)
  }

  if(user && user.token){
      return { Authorization: 'Bearer ' + user.accessToken };
  }
}