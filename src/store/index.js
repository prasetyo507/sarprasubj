import { createStore, combineReducers } from "redux";
import { submissionReducer } from "../components/pages/submission/store/reducers/submissionReducer";
import { procurementReducer } from "../components/pages/procurement/store/reducer/procurementReducer";
import { vendorReducer } from "../components/pages/vendor/store/reducers/vendorReducer";

const rootReducer = combineReducers({
	submission: submissionReducer,
	procurement: procurementReducer,
	vendor: vendorReducer
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
