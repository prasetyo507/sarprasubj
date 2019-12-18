import React from "react";

/* 
 * Used to make tab navigation
 * @param {*} props
 * @return jsx
 * @usage dispatch array of object(s) in props like below
{
        name: "tab_katalog",
        title: "Katalog",
        content: <Catalogue />
} 
      */



const Tabs = props => {
  return (
    <>
      <div className="nav-tabs-custom">
        <ul className="nav nav-tabs">
          {props.tabinput.map((tab, index) => (
            <li key={index} className={index === 0 ? "active" : ""} >
              <a href={"#" + tab.name} data-toggle="tab">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {props.tabinput.map((tab, index) => (
            <div className={index === 0 ? "active tab-pane" : "tab-pane"} id={tab.name} key={index}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
