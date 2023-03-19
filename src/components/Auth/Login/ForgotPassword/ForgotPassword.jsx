import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgotPassword = ({ setShowLoginForm }) => {
  return (
    <div className="login-page__form forgot">
      <h2>Forgot password</h2>
      <form>
        <div className="form__input-box">
          <span className="icon">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </span>
          <input type="email" required placeholder="Email" />
        </div>
        <button type="submit" className="form__submit">
          Restore
        </button>
        <div className="form__register">
          <p>
            Already have an account?
            <span
              className="login__btn"
              onClick={() =>
                setShowLoginForm({
                  formLogin: true,
                  formRegister: false,
                  formForgotPass: false,
                })
              }
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
