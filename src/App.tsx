import { Routes, Route } from "react-router-dom";
import SignUp from "./components/ui/registeration/signup";
import SignIn from "./components/ui/registeration/signin";
import { useDispatch } from "react-redux";
import { addUser } from "./redux-store/actions/action";
import Lists from "./components/ui/todo/lists/lists";

const App = () => {

  const dispatch = useDispatch();

  const onAddUser = (email: string, name: string) => {
    dispatch(addUser(email, name));
  };


  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<SignUp addUser={onAddUser} />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/lists" element={<Lists />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
