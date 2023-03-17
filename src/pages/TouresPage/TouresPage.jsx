import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import thinking from "./img/thinking.png";
import Typed from "typed.js";
import "./Toures.scss";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import AosEffect from "../../shared/AosEffect/AosEffect";

const TouresPage = () => {
  useDocumentTitle("Toures");
  AosEffect();

  const typeRef = useRef(null);

  useEffect(() => {
    new Typed(typeRef.current, {
      strings: ["Ինչպիսի տուրեր եք ցանկանում տեսնե՞լ"],
      typeSpeed: 50,
      startDelay: 300,
      showCursor: false,
    });
  });

  return (
    <section className="toures">
      <div className="toures__bg"></div>
      <div className="container">
        <h2 className="toures__title title" ref={typeRef}></h2>
        <div className="toures__wrapper">
          <div className="toures__thinking" data-aos="fade-right">
            <img src={thinking} alt="" />
          </div>
          <div className="toures__category" >
            <div
              className="category__columns"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <NavLink className="category__item attraction">
                <span>Attraction</span>
              </NavLink>
              <NavLink className="category__item cultural">
                <span>Cultural</span>
              </NavLink>
            </div>
            <div
              className="category__columns"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              <NavLink className="category__item all">
                <span>All</span>
              </NavLink>
            </div>
            <div
              className="category__columns"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="900"
            >
              <NavLink className="category__item excursion">
                <span>Excursion Tours</span>
              </NavLink>
              <NavLink className="category__item art">
                <span>Museums and art galleries</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouresPage;
