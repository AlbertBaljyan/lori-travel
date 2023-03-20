import React from 'react';
import TouresCategory from '../components/TouresPage/TouresCategory/TouresCategory';
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const TouresPage = React.lazy(() => import("../pages/TouresPage/TouresPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage/BlogPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage/AboutPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const Profile = React.lazy(() => import("../components/Profile/Profile"));
const Auth = React.lazy(() => import("../components/Auth/Auth"));

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/toures",
    element: <TouresPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/toures/category",
    element: <TouresCategory />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routesConfig;

/* const RoutesConfig = React.memo(() => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <React.Suspense fallback={<Preloader />}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route path="info">
        <Route path="foods" element={"Foods"} />
        <Route path="transport" element={"Transport"} />
        <Route path="gazebos" element={"Gazebos"} />
      </Route>
      <Route
        path="toures"
        element={
          <React.Suspense fallback={<Preloader />}>
            <TouresPage />
          </React.Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <React.Suspense fallback={<Preloader />}>
            <BlogPage />
          </React.Suspense>
        }
      />
      <Route
        path="about"
        element={
          <React.Suspense fallback={<Preloader />}>
            <AboutPage />
          </React.Suspense>
        }
      />
      <Route
        path="login"
        element={
          <React.Suspense fallback={<Preloader />}>
            <Auth />
          </React.Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <React.Suspense fallback={<Preloader />}>
            <Profile />
          </React.Suspense>
        }
      />
    </Routes>
  );
}); */


