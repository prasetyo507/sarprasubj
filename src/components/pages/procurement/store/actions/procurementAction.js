import * as actionType from "./types";

export const dispatchProcurement = procData => ({
	type: actionType.SUBMIT_PROCUREMENT,
	payload: procData
});
export const editProcurement = (refnumber, index, select) => ({
	type: actionType.EDIT_PROCUREMENT_ITEMS,
	payload: { refnumber, index, select }
});
export const approveProcurement = (approveData, refnumber) => ({
	type: actionType.APPROVE_PROCUREMENT,
	payload: { approveData, refnumber }
});
