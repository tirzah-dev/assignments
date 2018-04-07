const initialState = {
    data: []
}

const catReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CAT":
            return {
                data: [...state.data, action.cat]
            }
        case "DELETE_CAT":
            return {
                data: state.data.filter((cat, i) => i !== action.index)
            }
        default:
            return state;
    }
}
//action
export const addCat = cat => {
    return {
        type: "ADD_CAT",
        cat
    }
}
export const deleteCat = index => {
    return {
        type: "DELETE_CAT",
        index
    }
}


export default catReducer;