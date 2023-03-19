import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import "../src/styles/common.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LanguageContextProvider from "./context/contextLang";
import { AuthContextProvider } from "./context/contextAuth";

export const REPO_NAME = "/lori-travel/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={REPO_NAME}>
      <AuthContextProvider>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
