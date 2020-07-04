import * as actionType from "../actions/types";

const initState = {
	authForm: "",
	tokenKey: ""
};

export const loginReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_AUTH:
			return {
				...state,
				authForm: action.payload
			};

		default:
			return state;
	}
};
export const tokenReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.DISPATCH_TOKEN:
			return {
				...state,
				tokenKey: action.payload
			};

		default:
			return state;
	}
};