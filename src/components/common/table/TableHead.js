import React from "react";

const TableHead = props => {
  return props.tableHeadContent.map((content, i) => (
    <tr key={i}>
      {Object.values(content).map((headContent, index) => {
        return <th key={index}>{headContent}</th>;
      })}
    </tr>
  ));
};

export default TableHead;
