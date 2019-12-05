import * as actionType from './types';

export const fillOutSubmissionHeader = formHeader => ({
    type: actionType.FILL_SUBMISSION_HEADER,
    payload: formHeader
})