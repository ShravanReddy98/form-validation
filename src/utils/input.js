import React from "react";

const Input = ({name, type, value, fun,required=false,error=null}) => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"10px" ,alignItems:"start"}}>
      <div style={{fontSize:"15px"}}>
      {name}{required && <span style={{color:"red"}}>*</span>}
      </div>
      <input type={type} name={name} value={value} onChange={fun}   />
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
};

export default Input;
