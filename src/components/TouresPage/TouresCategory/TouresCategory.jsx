import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import AosEffect from "../../../shared/AosEffect/AosEffect";
import { Typewriter } from "react-simple-typewriter";
import thinkingGirl from "./img/thinking.png";
import useLanguage from "../../../hooks/useLanguageContext";
import touresList from "./toures.json";
import common from "./common.json";
import "./TouresCategory.scss";

const TouresCategory = () => {
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
    setKey((key) => key + 1);
  }, [language]);

  return (
    <section className="toures">
      <div className="toures__bg"></div>
      <div className="container">
        <h2 className="toures__title title">
          <Typewriter
            key={key}
            words={[common[language].title]}
            typeSpeed={100}
          />
        </h2>
        <div className="toures__wrapper">
          <div className="toures__thinking" data-aos="fade-right">
            <img src={thinkingGirl} alt="Thinking girl" />
          </div>
          <div className="toures__category">
            {touresListMemo.map((toures) => {
              return (
                <div
                  key={toures.id}
                  className="category__columns"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {toures.toures.map((toure) => (
                    <NavLink
                      key={toure.id}
                      className="category__item attraction"
                    >
                      <span>{toure.tourCategory[language]}</span>
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouresCategory;
