import React, { useContext } from "react";
import "../InputCategory/InputCategory.css";
import CategoryContext from "../../../context/CategoryContext";
import NewInputContext from "../../../context/NewInputContext";

const InputCategory = () => {
  const value = useContext(CategoryContext);
  const newCategory = useContext(NewInputContext)
  const chosenCategory = (e) => {
    newCategory.setChosenCategory(e.target.value)
  }

  return (
    <div className="inputCategory text-start">
      <label className="d-block text-start"></label>
      <NewInputContext.Consumer>
      {(newCategory)=>
        <select className="inputCategory__select form-select w-100" aria-label="Select list" onChange={chosenCategory}>
      <option defaultValue>Open</option>
        <CategoryContext.Consumer>
          {(value) =>
            value.categories.map((category, index) => {
              return <option className="inputCategory__option p-1" key={index} value={category}>{category}</option>;
            })
          }
        </CategoryContext.Consumer>
        
      </select>
      }
      
      </NewInputContext.Consumer>
    </div>
  );
};

export default InputCategory;
