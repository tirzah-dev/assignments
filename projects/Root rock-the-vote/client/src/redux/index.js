import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import issueReducer, { getIssues } from "./issues";

const globalState = {
    issues: issueReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(getIssues());

export default store;