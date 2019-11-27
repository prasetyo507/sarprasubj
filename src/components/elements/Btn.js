import React from "react";

const Btn = props => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};
export default Btn;
