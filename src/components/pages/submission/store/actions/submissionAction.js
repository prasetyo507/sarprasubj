import * as actionType from "./types";

export const dispatchSubmission = submissionData => ({
	type: actionType.DISPATCH_SUBMISSION,
	payload: submissionData
});

export const rejectItem = payloadAfterItemReject => ({
	type: actionType.REJECT_SUBMISSION_ITEM,
	payload: payloadAfterItemReject
});

export const approveItem = payloadAfterItemApprove => ({
	type: actionType.APPROVE_SUBMISSION_ITEM,
	payload: payloadAfterItemApprove
});
