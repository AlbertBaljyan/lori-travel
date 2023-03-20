import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import AosEffect from "../../shared/AosEffect/AosEffect";
import useLanguage from "../../hooks/useLanguageContext";
import touresList from "./toures.json";
import { Typewriter } from "react-simple-typewriter";
import common from "./common.json";
import "./TouresPage.scss";

const TouresPageComp = () => {
  AosEffect();
  useDocumentTitle("Toures");
  const { language } = useLanguage();
  const [key, setKey] = useState(0);
  const touresListMemo = useMemo(() => touresList, []);

  useEffect(() => {
    document.querySelector(".wrapper").classList.add("toures-bg");

    return () => {
      document.querySelector(".wrapper").classList.remove("toures-bg");
    };
  }, []);

  useEffect(() => {
    document.querySelector("main").style.paddingTop = 0;

    return () => {
      document.querySelector("main").style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    setKey((key) => key + 1);
  }, [language]);

  return (
    <section className="toures">
      <div className="container">
        <div className="toures__wrapper">
         {/*  <h2 className="toures__title title">
            <Typewriter
              key={key}
              words={[common[language].title]}
              typeSpeed={100}
            />
          </h2> */}
          <ul className="toures__category">
            <li className="category__item  center">
              <NavLink to="/toures/category">
                <span>All</span>
                <div className="photo all"></div>
              </NavLink>
            </li>
            {touresListMemo.map((toure) => {
              return (
                <li
                  key={toure.id}
                  className={`category__item`}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  style={{ "--i": toure.id }}
                >
                  <NavLink>
                    <span>{toure.tourCategory[language]}</span>
                    <div className={`photo ${toure.class}`}></div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TouresPageComp;
