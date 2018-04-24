import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import bountyReducer from "./bounties";

const globalState = {
    bounties: bountyReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;