import * as actionType from '../actions/types';

const initState = {
    submissionHeader: []
}

export const submissionReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.FILL_SUBMISSION_HEADER:
            return {
                ...state,
                submissionHeader: action.payload
            }
    
        default:
            return state;
    }
}