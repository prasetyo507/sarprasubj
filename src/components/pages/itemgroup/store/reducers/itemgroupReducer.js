import * as actionType from "../actions/types";

const initState = {
	kategoriForm: [],
	jenisForm: []
};

export const kategoriReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_KATEGORI:
			return {
				...state,
				kategoriForm: [...state.kategoriForm, action.payload]
			};
		case actionType.DELETE_KATEGORI:
			let deleteForm = [...state.kategoriForm]
			let deleteId = action.payload
			var formDelete = deleteForm.filter(kategori => {
				return kategori.id !== deleteId;
			});
			return {
				...state,
				kategoriForm: formDelete
			};
		case actionType.EDIT_KATEGORI:
			// ganti data todo
			var kategoriForm = [...state.kategoriForm]
			var id = action.payload.index
			var todo = action.payload.kategoriData
			var form = kategoriForm.find(kategori => {
				return kategori.id === id;
			});
			var formx = kategoriForm.filter(kategori => {
				return kategori.id !== id;
			});
			form = todo
			formx.push(form)
			// return state baru
			return {
				...state,
				kategoriForm: formx
			}

		default:
			return state;
	}
};
export const jenisReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_JENIS:
			return {
				...state,
				jenisForm: [...state.jenisForm, action.payload]
			};
		case actionType.DELETE_JENIS:
			let deleteForm = [...state.jenisForm]
			let deleteId = action.payload
			var formDelete = deleteForm.filter(jenis => {
				return jenis.id !== deleteId;
			});
			return {
				...state,
				jenisForm: formDelete
			};
		case actionType.EDIT_JENIS:
			// ganti data todo
			var jenisForm = [...state.jenisForm]
			var id = action.payload.index
			var todo = action.payload.jenisData
			var form = jenisForm.find(jenis => {
				return jenis.id === id;
			});
			var formx = jenisForm.filter(jenis => {
				return jenis.id !== id;
			});
			form = todo
			formx.push(form)
			// return state baru
			return {
				...state,
				jenisForm: formx
			}

		default:
			return state;
	}
};
