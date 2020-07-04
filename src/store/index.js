import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { submissionReducer } from "../components/pages/submission/store/reducers/submissionReducer";
import { procurementReducer } from "../components/pages/procurement/store/reducer/procurementReducer";
import { vendorReducer } from "../components/pages/vendor/store/reducers/vendorReducer";
import {
	barangReducer,
	catalogueReducer
} from "../components/pages/items/store/reducers/itemsReducer";
import {
	kategoriReducer,
	jenisReducer
} from "../components/pages/itemgroup/store/reducers/itemgroupReducer";
import { satuanReducer } from "../components/pages/satuan/store/reducers/satuanReducer";
import { loginReducer, tokenReducer } from "../components/pages/login/store/reducers/loginReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
	token: tokenReducer,
	auth: loginReducer,
	submission: submissionReducer,
	procurement: procurementReducer,
	vendor: vendorReducer,
	barang: barangReducer,
	catalogue: catalogueReducer,
	kategori: kategoriReducer,
	jenis: jenisReducer,
	satuan: satuanReducer
});

const persistConfig = {
	key: "root",
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };
