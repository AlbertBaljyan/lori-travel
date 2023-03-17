import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "../../../../hooks/usePasswordToggle";

const SignUp = ({ setShowLoginForm }) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div className="login-page__form register">
      <h2>Registration</h2>
      <form>
        <div className="form__input-box ">
          <span className="icon">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </span>
          <input type="text" required placeholder="Username" />
        </div>
        <div className="form__input-box register">
          <span className="icon">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </span>
          <input type="email" required placeholder="Email" />
        </div>
        <div className="form__input-box">
          <span className="icon">{ToggleIcon}</span>
          <input type={PasswordInputType} required placeholder="Password" />
        </div>
        <div className="form__input-remember">
          <label>
            <input type="checkbox" />I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" className="form__submit">
          Register
        </button>
        <div className="form__register">
          <p>
            Already have an account?
            <span className="login__btn" onClick={() => setShowLoginForm(true)}>
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
