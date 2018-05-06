import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import bountyReducer from "./bountyReducer";

import { getEvents } from "./bountyReducer";

const globalState = {
    bounties: bountyReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(getBounties());

export default store;