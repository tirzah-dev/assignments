import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    erMsg: ""
}

const planetReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_PLANETS":
            return {
                ...state,
                data: action.planets,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.err.Msg
            }
        default:
            return state;
    }
}

const swapiURL = "https://swapi.co/api/planets/";

export const getPlanets = () => {
    return dispatch => {
        axios.get(swapiURL)
            .then(response => {
                dispatch({
                    type: "GET_PLANETS",
                    planets: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    typr: "ERR_MSG",
                    errMsg: "Sorry, you're data is unavailable"
                });
            });
    }
}

export default planetReducer;