import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loginPhoto from "./img/login.png";
import LoginForm from "./LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  useEffect(() => {
    document.querySelector(".wrapper").classList.add("remove-bg");

    return () => {
      document.querySelector(".wrapper").classList.remove("remove-bg");
    };
  }, []);
  return (
    <section className="login-page">
      <div className="container">
        <div className="login-page__wrapper">
         {/*  <div className="login-page__photo">
            <LazyLoadImage
              src={loginPhoto}
              effect="blur"
              loading="lazy"
              alt="login photo"
            />
          </div> */}
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
