import Filter from "./Filter/Filter";
import "./TouresCategory.scss";

const TouresCategory = () => {
  return (
    <div className="toures-category">
      <div className="container">
        <div className="toures-category__wrapper">
          <Filter />
          <div className="toures-category__items">
            <div className="category__item">
              <div className="item__photo"></div>
              <div className="item__title"></div>
              <div className="item__duration"></div>
              <div className="item__info">
                <div className="info__price"></div>
                <div className="info__date"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouresCategory;
