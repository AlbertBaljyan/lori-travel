import React, { lazy} from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Blog = lazy(() => import("../../components/HomePage/Blog/Blog"));
const MainContent = lazy(() =>
  import("../../components/HomePage/MainContent/MainContent")
);
const Places = lazy(() => import("../../components/HomePage/Places/Places"));
const Toures = lazy(() => import("../../components/HomePage/Toures/Toures"));

const HomePage = () => {
  useDocumentTitle("Home")
  return (
    <>
      <MainContent />
      <Places />
      <Blog />
      <Toures />
    </>
  );
};

export default HomePage;
