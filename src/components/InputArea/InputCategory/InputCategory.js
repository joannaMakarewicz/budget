import React, { useContext } from "react";
import "../InputCategory/InputCategory.css";
import CategoryContext from "../../../context/CategoryContext";

const InputCategory = () => {
  const value = useContext(CategoryContext);
  console.log(value);
  return (
    <div className="inputCategory text-start">
      <label className="d-block text-start"></label>
      <select className="inputCategory__select form-select w-100" aria-label="Select list">
      <option defaultValue>Open</option>
        <CategoryContext.Consumer>
          {(value) =>
            value.categories.map((category, index) => {
              return <option className="inputCategory__option p-1" key={index} value={category}>{category}</option>;
            })
          }
        </CategoryContext.Consumer>
      </select>
    </div>
  );
};

export default InputCategory;
