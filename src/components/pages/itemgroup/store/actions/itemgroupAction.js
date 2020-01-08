import * as actionType from "./types";

export const dispatchKategori = kategoriData => ({
	type: actionType.DISPATCH_KATEGORI,
	payload: kategoriData
});

export const dispatchEditKategori = (index, kategoriData) => ({
	type: actionType.EDIT_KATEGORI,
	payload: { index, kategoriData }
});

export const dispatchDeleteKategori = id => ({
	type: actionType.DELETE_KATEGORI,
	payload: id
});

export const dispatchJenis = jenisData => ({
	type: actionType.DISPATCH_JENIS,
	payload: jenisData
});

export const dispatchEditJenis = (index, jenisData) => ({
	type: actionType.EDIT_JENIS,
	payload: { index, jenisData }
});

export const dispatchDeleteJenis = id => ({
	type: actionType.DELETE_JENIS,
	payload: id
});
