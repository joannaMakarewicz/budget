import React from "react";
import '../InputCategory/InputCategory.css';

const InputCategory = () => {
  return (
    <div className="inputCategory text-start">
      <label className="d-block text-start"></label>
      <select className="inputCategory__select w-100">
        <option className="p-1">Opcja1</option>
      </select>
    </div>
  );
};

export default InputCategory;
