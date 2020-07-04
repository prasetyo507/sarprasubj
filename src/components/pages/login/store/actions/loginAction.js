import * as actionType from "./types";

export const dispatchAuth = UserInfo => ({
	type: actionType.DISPATCH_AUTH,
	payload: UserInfo
});
export const dispatchToken = token => ({
	type: actionType.DISPATCH_TOKEN,
	payload: token
});

