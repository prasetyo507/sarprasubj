import React from "react";

const Section = props => {
	return (
		<>
			{props.pageName === "NaN" ?
				false : (
					<section className="content-header">
						<h1>
							{props.pageName}
							<small>{props.pageSubject}</small>
						</h1>
					</section>
				)}

			<section className={"content " + props.class_section}>
				<div className="box box-default">
					{props.box_header ? (
						<div className="box-header with-border">
							<h3 className="box-title">{props.box_header}</h3>
							{props.box_setting}
						</div>
					) : null}
					<div className="box-body">{props.children}</div>
				</div>
			</section>
		</>
	);
};

export default Section;
