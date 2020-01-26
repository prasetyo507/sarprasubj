import * as actionType from "./types";

export const dispatchBarang = barangData => ({
	type: actionType.DISPATCH_BARANG,
	payload: barangData
});

export const dispatchEditBarang = (index, barangData) => ({
	type: actionType.EDIT_BARANG,
	payload: { index, barangData }
});

export const dispatchDeleteBarang = id => ({
	type: actionType.DELETE_BARANG,
	payload: id
});

export const dispatchCatalogue = catalogueData => ({
	type: actionType.DISPATCH_CATALOGUE,
	payload: catalogueData
});

export const dispatchEditCatalogue = (index, catalogueData) => ({
	type: actionType.EDIT_CATALOGUE,
	payload: { index, catalogueData }
});

export const dispatchDeleteCatalogue = id => ({
	type: actionType.DELETE_CATALOGUE,
	payload: id
});
