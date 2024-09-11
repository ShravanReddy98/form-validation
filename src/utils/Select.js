import React from "react";

const Select = ({ name, value, array, fun }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <select name={name} value={value} onChange={fun}>
        {array.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
