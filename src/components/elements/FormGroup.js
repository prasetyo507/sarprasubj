import React from "react";

function ConditionInput({ type, label, value, id, readOnly,placeholder,disabled,name,checked }) {
  if (
    type === "text" ||
    type === "date" ||
    type === "email" ||
    type === "hidden" ||
    type === "number" ||
    type === "password"
  ) {
    return (
      <>
        <label>{label}</label>
        <input
          type={type}
          className="form-control"
          value={value}
          placeholder={placeholder}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          name={name}
        ></input>
      </>
    );
  } else {
    return (
      <>
        <div className={type}>
          <label>
            <input type={type} name={name} value={value} id={id} checked={checked} />
            {label}
          </label>
        </div>
      </>
    );
  }
}

const FormGroup = props => {
  return props.label.map((lbl, i) => (
    <div className="form-group" key={i}>
      <ConditionInput
        type={lbl.type}
        label={lbl.label}
        name={lbl.name}
        value={lbl.value}
        placeholder={lbl.placeholder}
        id={lbl.id}
        readOnly={lbl.readonly}
        disabled={lbl.disabled}
        checked={lbl.checked}
      />
    </div>
  ));
};
export default FormGroup;
