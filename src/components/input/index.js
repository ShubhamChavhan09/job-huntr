import React from "react";

const Input = ({ name, value, set }) => {
  return (
    <>
      <label>{name}</label>
      <input type="text" value={value} onChange={(e) => set(e.target.value)} />
    </>
  );
};

export default Input;
