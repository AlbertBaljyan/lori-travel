import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "../../../../hooks/usePasswordToggle";

const SignIn = ({ setShowLoginForm }) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  return (
    <div className="login-page__form login">
      <h2>Login</h2>
      <form>
        <div className="form__input-box">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input type="email" required placeholder="Email" />
        </div>
        <div className="form__input-box">
          <span className="icon icon-eye">{ToggleIcon}</span>
          <input type={PasswordInputType} required placeholder="Password" />
        </div>
        <div className="form__input-remember">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <span
            onClick={() =>
              setShowLoginForm({
                formLogin: false,
                formRegister: false,
                formForgotPass: true,
              })
            }
          >
            Forgot Password
          </span>
        </div>
        <button type="submit" className="form__submit">
          Login
        </button>
        <div className="form__register">
          <p>
            Don't have an account?
            <span
              className="register__btn"
              onClick={() =>
                setShowLoginForm({
                  formLogin: false,
                  formRegister: true,
                  formForgotPass: false,
                })
              }
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
