import * as actionType from "./types";

export const dispatchVendor = vendorData => ({
	type: actionType.DISPATCH_VENDOR,
	payload: vendorData
});

export const dispatchEditVendor = (index, vendorData) => ({
	type: actionType.EDIT_TODO,
	payload: { index, vendorData }
});
