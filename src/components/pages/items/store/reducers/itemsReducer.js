import * as actionType from "../actions/types";

const initState = {
	barangForm: [],
	catalogueForm: []
};

export const barangReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_BARANG:
			return {
				...state,
				barangForm: [...state.barangForm, action.payload]
			};
		case actionType.DELETE_BARANG:
			let deleteForm = [...state.barangForm]
			let deleteId = action.payload
			var formDelete = deleteForm.filter(barang => {
				return barang.id !== deleteId;
			});
			return {
				...state,
				barangForm: formDelete
			};
		case actionType.EDIT_BARANG:
			// ganti data todo
			var barangForm = [...state.barangForm]
			var id = action.payload.index
			var todo = action.payload.barangData
			var form = barangForm.find(barang => {
				return barang.id === id;
			});
			var formx = barangForm.filter(barang => {
				return barang.id !== id;
			});
			form = todo
			formx.push(form)
			// return state baru
			return {
				...state,
				barangForm: formx
			}

		default:
			return state;
	}
};
export const catalogueReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_CATALOGUE:
			return {
				...state,
				catalogueForm: [...state.catalogueForm, action.payload]
			};
		case actionType.DELETE_CATALOGUE:
			let deleteForm = [...state.catalogueForm]
			let deleteId = action.payload
			var formDelete = deleteForm.filter(catalogue => {
				return catalogue.id !== deleteId;
			});
			return {
				...state,
				catalogueForm: formDelete
			};
		case actionType.EDIT_CATALOGUE:
			// ganti data todo
			var catalogueForm = [...state.catalogueForm]
			var id = action.payload.index
			var todo = action.payload.catalogueData
			var form = catalogueForm.find(catalogue => {
				return catalogue.id === id;
			});
			var formx = catalogueForm.filter(catalogue => {
				return catalogue.id !== id;
			});
			form = todo
			formx.push(form)
			// return state baru
			return {
				...state,
				catalogueForm: formx
			}

		default:
			return state;
	}
};
