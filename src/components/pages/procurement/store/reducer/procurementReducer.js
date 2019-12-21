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

		default:
			return state;
	}
};
