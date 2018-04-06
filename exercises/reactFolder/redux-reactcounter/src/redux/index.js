import { createStore } from 'redux';

export function increment (){
    return{
        type: "INCREMENT"
    }
}
export function decrement (){
    return{
        type: "DECREMENT"
    }
}
export function half (){
    return{
        type: "HALF"
    }
}
export function double (){
    return{
        type: "DOUBLE"
    }
}

function reducer(state = 0, action){
    switch(action.type){
        case "INCREMENT":
            return state +1;
        case "DECREMENT":
            return state -1;
        case "HALF":
            return state / 2;
        case "DOUBLE":
            return state *2;
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;