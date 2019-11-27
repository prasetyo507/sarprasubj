import React from 'react';

const TableHead = (props) => {
    return (
        props.tableHeadContent.map((content, i) => 
            <th key={i}>{content.name}</th>
        )
    )
}

export default TableHead;