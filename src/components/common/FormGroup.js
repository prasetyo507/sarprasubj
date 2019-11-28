import React from 'react';

export const FreeText = (props) => {
    return(
        props.formProp.map((property, i) => 
            <div className="form-group">
                <label htmlFor={property.lableFor}>{property.lableName}</label>
                <input {...property.inputAttr} />
            </div>
        )
    )
}

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

export const Select = (props) => {
    return(
        props.formProp.map((property, i) => 
            <div class="form-group">
                <label>{property.selectName}</label>
                <select class="form-control">
                    {
                        property.selectList.map((s, i) =>
                            <option {...s.inputAttr} >{s.name}</option>
                        )
                    }
                </select>
            </div>
        )
    )
}