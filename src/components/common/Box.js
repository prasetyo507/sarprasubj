import React from "react";
function LimitString({ name }) {
  if (name.length > 15) {
    return "...";
  } else {
    return "";
  }
}

const Box = props => {
  return (
    <div className="row">
      {props.BoxProperty.map((box, index) => (
        <div key={index} className={box.col}>
          <div className="box box-primary shade">
            <div className="box-body box-profile">
              <div className="containerz">
                <img
                  src={box.src}
                  alt={box.alt}
                  className="profile-user-image image"
                />
                <a href="#!" className="icon" title={box.btn_tooltip}>
                  <button
                    type="button"
                    className={box.btn_className}
                    data-toggle="modal"
                    data-target={box.mdl_target}
                  >
                    <i className={box.icon} />
                  </button>
                </a>
              </div>

              <h3 className="profile-username text-center">
                {box.name.substring(0, 15)}

                <LimitString name={box.name} />
              </h3>
              <p className="text-muted text-center">{box.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Box;
