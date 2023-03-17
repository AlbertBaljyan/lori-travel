import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
  return (
    <NavLink to="/login" className="auth__link" title="Profile">
      <FontAwesomeIcon icon={faUser} className="auth" />
    </NavLink>
  );
};

export default Auth;
