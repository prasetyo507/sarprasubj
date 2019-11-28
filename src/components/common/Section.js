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
            <section className="content">
                <div className="box">
                    <div className="box-body">
                        {props.children}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section;