import React from 'react';

/**
 * Used to make text input with type input such text, number, password, email, date
 * @param {*} props
 * ============================================================================================
 usage: 
 props structure have to like this:
  [
       {
            lableFor: "",
            lableName: "",
            inputAttr: {
                type: "text",
                placeholder: "",
                className: "form-control",
                name: "",
                disabled: boolean // optional
                ...
            }
        }
    ]
 =============================================================================================*/
export const FreeText = (props) => {
    return(
        props.formProp.map((property, i) => 
            <div className="form-group" key={i}>
                <label htmlFor={property.lableFor}>{property.lableName}</label>
                <input {...property.inputAttr} />
            </div>
        )
    )
}

/**
 * Used to make input with type such checkbox or radio button
 * @param {*} props
 * ============================================================================================
 usage: 
 props structure have to like this:
[
    {
        optionName: "first option",
        optionList: [
            {
                optionName: "option A",
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
 =============================================================================================*/
export const Optional = (props) => {
    return(
        props.formProp.map((property, i) => 
            <div class="form-group" key={i}>
                <label>{property.optionName}</label>
                {property.optionList.map((c,index) => 
                    <div class="checkbox" key={index}>
                        <label><input {...c.inputAttr} /> {c.optionName}</label>
                    </div>
                )}
            </div>
        )
    )
}

/**
 * Used to make input with select box type
 * @param {*} props
 * ============================================================================================
 usage: 
 props structure have to like this:
[
    {
        selectName: "Select Box 1",
        selectList: [
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
 =============================================================================================*/
export const Select = (props) => {
    return(
        props.formProp.map((property, i) => 
            <div class="form-group">
                <label>{property.selectName}</label>
                <select class="form-control">
                    {
                        property.selectList.map((s, i) =>
                            <option key={i} {...s.inputAttr} >{s.name}</option>
                        )
                    }
                </select>
            </div>
        )
    )
}