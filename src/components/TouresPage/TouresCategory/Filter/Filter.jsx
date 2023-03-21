import React, { useState } from "react";
import "./Filter.scss";

const Filter = () => {
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: "All",
      isChecked: false,
    },
    {
      id: 2,
      name: "Attraction",
      isChecked: false,
    },
    {
      id: 3,
      name: "Excursion",
      isChecked: false,
    },
    {
      id: 4,
      name: "Museums and art galleries",
      isChecked: false,
    },
    {
      id: 5,
      name: "Cultural",
      isChecked: false,
    },
  ]);
  const [disableCheck, setDisableCheck] = useState(false);

  const handleChangeCheckbox = (e, index) => {
    const stateCopy = JSON.parse(JSON.stringify(categoryList));
    stateCopy[index].isChecked = e.target.checked;
    setCategoryList(stateCopy);
  };

  return (
    <div className="toures-category__filter">
      <span onClick={() => setDisableCheck(true)}>+</span>
      {categoryList.map((item, index) => (
        <label
          key={item.id}
          className={item.isChecked ? "label" : "label active"}
        >
          <span>{item.name}</span>
          <input
            type="checkbox"
            onChange={(e) => handleChangeCheckbox(e, index)}
            disabled={!disableCheck}
          />
        </label>
      ))}
    </div>
  );
};

export default Filter;
