import * as actionType from "./types";

export const dispatchSatuan = satuanData => ({
	type: actionType.DISPATCH_SATUAN,
	payload: satuanData
});

export const dispatchEditSatuan = (index, satuanData) => ({
	type: actionType.EDIT_SATUAN,
	payload: { index, satuanData }
});

export const dispatchDeleteSatuan = id => ({
	type: actionType.DELETE_SATUAN,
	payload: id
});
