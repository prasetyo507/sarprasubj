import * as actionType from "../actions/types";

const initState = {
	authForm: []
};

export const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_AUTH:
			return {
				...state,
				authForm: [...state.authForm, action.payload]
			};

		default:
			return state;
	}
};