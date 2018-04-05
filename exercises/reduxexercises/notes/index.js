const redux = require("redux");

// console.log(redux);
//set up initial state
const initialState = {
    counter: 0
}
//define reducer, which will spit out a new state based on action and prevState

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                counter: state.counter + action.amount
            }
        case "RESET":
            return initialState
        default:
            return state;
    }
}

//actions are OBJECTS that carry information that potentially will be useful for state
const action = {
    type: "INCREMENT",
    amount: 1
}
const reset = {
    type: "RESET",
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(action);
store.dispatch(reset);
