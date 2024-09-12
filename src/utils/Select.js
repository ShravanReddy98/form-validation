import React from "react";

const Select = ({ name, value, array, fun, required = false, error }) => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"5px",alignItems:"start"}}>
      <label htmlFor={name}>{name}{required && <span style={{ color: "red" }}>*</span>}</label>
      <select name={name} value={value} onChange={fun} style={{padding:"4px",fontSize:"18px",borderRadius:"3px"}}>

          <option key={-1} value={""}>
            {""}
          </option>
        {array.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select> 
      {error && <span style={{ color: "red" ,fontSize:"15px"}}>{error}</span>}
    </div>
  );
};

export default Select;
