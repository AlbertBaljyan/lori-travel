import React, { useState } from "react";
const SignUp = React.lazy(() => import("./SignUp/SignUp"));
const SignIn = React.lazy(() => import("./SignIn/SignIn"));

const LoginForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div className={`login__form ${!showLoginForm ? "active" : "no-active"}`}>
      {showLoginForm ? (
        <SignIn
          setShowLoginForm={setShowLoginForm}
        />
      ) : (
        <SignUp
          setShowLoginForm={setShowLoginForm}
        />
      )}
    </div>
  );
};

export default LoginForm;
