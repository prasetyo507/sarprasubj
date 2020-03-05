import * as actionType from "../actions/types";

const initState = {
	list: []
};

export const procurementReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.SUBMIT_PROCUREMENT:
			return {
				...state,
				list: [...state.list, action.payload]
			};
		case actionType.EDIT_PROCUREMENT_ITEMS:
			// ganti data todo
			let list = [...state.list]
			let index = action.payload.index
			let refnumber = action.payload.refnumber
			let select = action.payload.select
			let form = list.find(proc => {
				return proc.submission_id === refnumber;
			});
			let formx = list.filter(proc => {
				return proc.submission_id !== refnumber;
			});
			let idnya = index.map(eliminate => eliminate.id)

			let approved = []
			form.items.map(row => {
				let key = idnya.find(id => id === row.id_catalogue)
				if (row.id_catalogue !== key) {
					approved = [...approved, row]
				}
				return approved
			})
			let unselect = approved.filter(proc => {
				return proc.id_catalogue !== select.id_catalogue;
			});
			unselect.push(select)
			form.items = unselect;
			formx.push(form)
			return {
				...state,
				list: formx
			}
		case actionType.APPROVE_PROCUREMENT:
			// ganti data todo
			let lists = [...state.list]
			let approveData = action.payload.approveData
			let refnumbers = action.payload.refnumber
			let forms = lists.find(proc => {
				return proc.submission_id === refnumbers;
			});
			let formsx = lists.filter(proc => {
				return proc.submission_id !== refnumbers;
			});
			forms = approveData
			formsx.push(forms)
			// return state baru
			return {
				...state,
				list: formsx
			}
		default:
			return state;
	}
};
