import React from 'react';

const TableContent = (props) => {
    return (
        props.tableContent.map((content, i) => 
            <td key={i}>{content.content}</td>
        )
    )
}

export default TableContent