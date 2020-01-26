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

		case actionType.REJECT_SUBMISSION_ITEM:
			let submission = [...state.submissionForm];
			let index = action.payload.refnumber;
			let validationResult = action.payload;
			submission[index] = validationResult;

			return { ...state };

		default:
			return state;
	}
};
