import * as actionType from "./types";

export const dispatchVendor = vendorData => ({
	type: actionType.DISPATCH_VENDOR,
	payload: vendorData
});

export const dispatchEditVendor = (index, vendorData) => ({
	type: actionType.EDIT_VENDOR,
	payload: { index, vendorData }
});

export const dispatchDeleteVendor = id => ({
	type: actionType.DELETE_VENDOR,
	payload: id
});
