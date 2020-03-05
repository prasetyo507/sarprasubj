import * as actionType from "../actions/types";

const initState = {
	submissionForm: []
};

export const submissionReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_SUBMISSION:
			return {
				...state,
				submissionForm: [...state.submissionForm, action.payload]
			};

		case actionType.EDIT_SUBMISSION_STATUS:
			// ganti data todo
			var submissionForm = [...state.submissionForm]
			var index = action.payload.index
			var refnumber = action.payload.refnumber
			var itemData = action.payload.itemData
			var form = submissionForm.find(submission => {
				return submission.refnumber === refnumber;
			});
			var itemnya = form.items.find(items => {
				return items.item === index;
			});

			var itemx = form.items.filter(items => {
				return items.item !== index;
			});
			var formx = submissionForm.filter(submission => {
				return submission.refnumber !== refnumber;
			});
			itemnya = itemData
			itemx.push(itemnya)
			form.items = itemx;
			formx.push(form)
			// return state baru
			return {
				...state,
				submissionForm: formx
			}
		default:
			return state;
	}
};
