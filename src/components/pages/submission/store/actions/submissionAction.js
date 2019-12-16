import * as actionType from "./types";

export const dispatchSubmission = submissionData => ({
	type: actionType.DISPATCH_SUBMISSION,
	payload: submissionData
});
