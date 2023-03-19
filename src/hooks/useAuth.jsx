import { useContext } from "react";
import { AuthContext } from "../context/contextAuth";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
