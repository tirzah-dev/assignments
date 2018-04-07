import { createStore, combineReducers } from "redux";

import catReducer from './cats';
const store = createStore(combineReducers({ cats: catReducer }));
//gather all reducers, and put together in one store for export
store.subscribe(() => {
    console.log(store.getState());
})

export default store;