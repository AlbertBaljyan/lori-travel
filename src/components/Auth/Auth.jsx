import Login from "./Login/Login";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to="/profile" /> : <Login />;
};

export default Auth;
