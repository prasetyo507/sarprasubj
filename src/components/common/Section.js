import React from 'react';

const Section = (props) => {
    return (
        <>
            <section className="content-header">
                <h1>
                    {props.pageName}
                    <small>{props.pageSubject}</small>
                </h1>
            </section>
            <section className="content">{props.children}</section>
        </>
    )
}

export default Section;