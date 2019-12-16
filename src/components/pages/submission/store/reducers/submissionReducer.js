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

		default:
			return state;
	}
};
