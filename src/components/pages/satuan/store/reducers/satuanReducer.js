import * as actionType from "../actions/types";

const initState = {
	satuanForm: []
};

export const satuanReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_SATUAN:
			return {
				...state,
				satuanForm: [...state.satuanForm, action.payload]
			};
		case actionType.DELETE_SATUAN:
			let deleteForm = [...state.satuanForm]
			let deleteId = action.payload
			var formDelete = deleteForm.filter(satuan => {
				return satuan.id !== deleteId;
			});
			return {
				...state,
				satuanForm: formDelete
			};
		case actionType.EDIT_SATUAN:
			// ganti data todo
			var satuanForm = [...state.satuanForm]
			var id = action.payload.index
			var todo = action.payload.satuanData
			var form = satuanForm.find(satuan => {
				return satuan.id === id;
			});
			var formx = satuanForm.filter(satuan => {
				return satuan.id !== id;
			});
			form = todo
			formx.push(form)
			// return state baru
			return {
				...state,
				satuanForm: formx
			}

		default:
			return state;
	}
};