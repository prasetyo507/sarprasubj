import React from "react";

/**
 * Used to make text input with type input such text, number, password, email, date
 * @param {*} props
 * @usage dispatch array of object(s) in props such below
[
    {
        forAttr: "",
        lableName: "",
        inputAttr: {
            type: "text/password/number/ ...",
            placeholder: "",
            className: "form-control ...",
            name: "",
            disabled: "" // optional
            ...
        }
    }
]
*/
export const FreeText = props => {
  return props.formProp.map((property, i) => (
    <div className="form-group" key={i}>
      <label htmlFor={property.forAttr}>{property.lableName}</label>
      <input {...property.inputAttr} />
    </div>
  ));
};

/**
 * Used to make input with type such checkbox or radio button
 * @param {*} props
 * @usage dispatch array of object(s) in props such below 
[
    {
        optionName: "first option",
        optionList: [
            {
                optionLable: "option A",
                inputAttr: {
                    type: "checkbox",
                    name: "array[]",
                    value: ""
                    ...
                }
            }
        ]
    }
]
*/
export const Option = props => {
  return props.formProp.map((property, i) => (
    <div className="form-group" key={i}>
      <label>{property.optionName}</label>
      {property.optionList.map((c, index) => (
        <div className="checkbox" key={index}>
          <label>
            <input {...c.inputAttr} /> {c.optionLable}
          </label>
        </div>
      ))}
    </div>
  ));
};

/**
 * Used to make input with select box type
 * @param {*} props
 * @return jsx
 * @usage dispatch array of object(s) in props like below
[
    {
        selectName: "Select Box 1",
        selectAttr: {
            className: "form-control ...",
            name: "",
            disabled: "" // optional
            ...
        },
        optionList: [
            {
                inputAttr: {
                    value: "1",
                    selected: true, // optional
                    disabled: true // optional
                },
                name: "option 1"
            }
        ]
    }
]
*/
export const Select = props => {
  return props.formProp.map((property, i) => (
    <div className="form-group">
      <label>{property.selectName}</label>
      <select {...property.selectAttr}>
        {property.optionList.map((s, i) => (
          <option key={i} {...s.inputAttr}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  ));
};
