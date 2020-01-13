import * as actionType from "./types";

export const dispatchAuth = UserInfo => ({
	type: actionType.DISPATCH_AUTH,
	payload: UserInfo
});

