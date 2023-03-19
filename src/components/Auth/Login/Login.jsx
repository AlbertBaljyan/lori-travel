import React, { useEffect, useState } from "react";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import "./Login.scss";
const SignUp = React.lazy(() => import("./SignUp/SignUp"));
const SignIn = React.lazy(() => import("./SignIn/SignIn"));

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState({
    formLogin: true,
    formRegister: false,
    formForgotPass: false,
  });

  useEffect(() => {
    document.querySelector(".wrapper").classList.add("login-bg");

    return () => {
      document.querySelector(".wrapper").classList.remove("login-bg");
    };
  }, []);

  return (
    <section className="login-page">
      <div className="container">
        <div className="login-page__wrapper">
          <div
            className={`login__form ${
              !showLoginForm.formLogin ? "active" : "no-active"
            }`}
          >
            {showLoginForm.formLogin ? (
              <SignIn setShowLoginForm={setShowLoginForm} />
            ) : showLoginForm.formRegister ? (
              <SignUp setShowLoginForm={setShowLoginForm} />
            ) : (
              <ForgotPassword setShowLoginForm={setShowLoginForm} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
