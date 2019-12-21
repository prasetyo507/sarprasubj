import * as actionType from "./types";

export const dispatchProcurement = procData => ({
	type: actionType.SUBMIT_PROCUREMENT,
	payload: procData
});
