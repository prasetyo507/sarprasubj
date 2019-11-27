import React from "react";

const Input = props => {
  return (
    <input
      type={props.type}
      name={props.name}
      className={props.className}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};
export default Input;
