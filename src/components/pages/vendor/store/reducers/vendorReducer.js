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
		case actionType.EDIT_TODO:
			// ganti data todo
			let vendorForm = [...state.vendorForm]
			let id = action.payload.index
			let todo = action.payload.vendorData
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
