import React from 'react';

const TableContent = (props) => {
    return (
        props.tableContent.map((content, i) =>
            <tr key={i}>
                {
                    Object.values(content).map((rowContent, index) => {
                        return <td key={index}>{rowContent}</td>
                    })
                }
            </tr>
        )
    )
}

export default TableContent