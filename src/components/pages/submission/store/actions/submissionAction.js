import * as actionType from "./types";

export const dispatchSubmission = submissionData => ({
	type: actionType.DISPATCH_SUBMISSION,
	payload: submissionData
});

export const dispatchEditSubmission = (refnumber, index, itemData) => ({
	type: actionType.EDIT_SUBMISSION_STATUS,
	payload: { refnumber, index, itemData }
});

