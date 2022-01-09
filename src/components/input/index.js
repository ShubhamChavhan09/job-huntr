import React from "react";

const Input = ({ name, value, set, label, type }) => {
  return (
    <>
      <label>{label}: </label>
      <input
        type={type}
        value={value}
        onChange={set}
        name={name}
        label={label}
      />
    </>
  );
};

export default Input;
