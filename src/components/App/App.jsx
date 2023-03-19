import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "../../routes/routesConfig";
import AosEffect from "../../shared/AosEffect/AosEffect";
import "./App.scss";
const Header = lazy(() => import("../Header/Header"));
const Footer = lazy(() => import("../Footer/Footer"));
const MemoizedIntroVideo = lazy(() => import("../IntroVideo/IntroVideo"));

function App() {
  AosEffect();

  const [skipVideo, setSkipVideo] = useState(false);

  if (sessionStorage.getItem("video")) {
    return (
      <>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              {routesConfig.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<React.Suspense>{route.element}</React.Suspense>}
                />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </>
    );
  } else {
    if (!skipVideo) {
      return (
        <MemoizedIntroVideo skipVideo={skipVideo} setSkipVideo={setSkipVideo} />
      );
    }
  }
}
export default App;
