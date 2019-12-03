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

function TabTitle({ i, name, title }) {
  let activated = i === 0 ? "active" : "";
  return (
    <li key={i} className={activated}>
      <a href={"#" + name} data-toggle="tab">
        {title}
      </a>
    </li>
  );
}
function TabContent({ i, name, content }) {
  let activated = i === 0 ? "active" : "";
  return (
    <div className={activated + " tab-pane "} id={name} key={i}>
      {content}
    </div>
  );
}
const Tabs = props => {
  return (
    <>
      <div className="nav-tabs-custom">
        <ul className="nav nav-tabs">
          {props.tabinput.map((tab, index) => (
            <TabTitle i={index} name={tab.name} title={tab.title} />
          ))}
        </ul>
        <div className="tab-content">
          {props.tabinput.map((tab, index) => (
            <TabContent i={index} name={tab.name} content={tab.content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
