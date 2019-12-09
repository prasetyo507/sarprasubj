import { createStore, combineReducers } from 'redux';
import { submissionReducer } from './reducers/submissionReducer';

const rootReducer = combineReducers({
    submission: submissionReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store