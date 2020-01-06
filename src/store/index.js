import { createStore, combineReducers } from "redux";
import { submissionReducer } from "../components/pages/submission/store/reducers/submissionReducer";
import { vendorReducer } from "../components/pages/vendor/store/reducers/vendorReducer";
import { barangReducer, catalogueReducer } from "../components/pages/items/store/reducers/itemsReducer";

const rootReducer = combineReducers({
	submission: submissionReducer,
	vendor: vendorReducer,
	barang: barangReducer,
	catalogue: catalogueReducer
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
