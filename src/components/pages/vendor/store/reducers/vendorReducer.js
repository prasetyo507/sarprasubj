import * as actionType from "../actions/types";

const initState = {
	vendorForm: []
};

export const vendorReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_VENDOR:
			return {
				...state,
				vendorForm: [...state.vendorForm, action.payload]
			};
		case actionType.DELETE_VENDOR:
			let deleteForm = [...state.vendorForm]
			let deleteId = action.payload
			var formDelete = deleteForm.filter(vendor => {
				return vendor.id !== deleteId;
			});
			return {
				...state,
				vendorForm: formDelete
			};
		case actionType.EDIT_VENDOR:
			// ganti data todo
			var vendorForm = [...state.vendorForm]
			var id = action.payload.index
			var todo = action.payload.vendorData
			var form = vendorForm.find(vendor => {
				return vendor.id === id;
			});
			var formx = vendorForm.filter(vendor => {
				return vendor.id !== id;
			});
			form = todo
			formx.push(form)
			// return state baru
			return {
				...state,
				vendorForm: formx
			}

		default:
			return state;
	}
};
