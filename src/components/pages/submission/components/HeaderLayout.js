import React from "react";

import { FreeText } from "../../../common/FormGroup";

const HeaderLayout = props => {
	return (
		<>
			<div className='row'>
				<div className='col-md-3'>
					<FreeText formProp={props.formAttr.refNumber} />
				</div>
				<div className='col-md-3'>
					<FreeText formProp={props.formAttr.submissionDate} />
				</div>
				<div className='col-md-6'>
					<FreeText formProp={props.formAttr.subjectForm} />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-6'>
					<FreeText formProp={props.formAttr.recipient} />
				</div>
				<div className='col-md-6'>
					<FreeText formProp={props.formAttr.sender} />
				</div>
			</div>
		</>
	);
};

export default HeaderLayout;
