import axios from 'axios';

const initialBountyState = {
    data:[],
    loading: true,
    errMsg: ""
}

const bountyReducer = (state = initialBountyState, action) => {
    switch(action.type){
        case "GET_BOUNTIES":{
            return {
                ...state,
                loading: false,
                data: action.bounties
            }
        }
        default: 
            return state;
    }
}

// export const getBounties = () => {
//     return axios.get("/bounties")
//     .then(response => {
//         return {
//             type: "GET_BOUNTIES",
//             bounties: response.data
//         };
//     })
//     .catch(err => {
//         return {
//             type: "ERR_MSG",
//             err: "Data Unavailable"
//         }
//     })
// }

export const getBounties = () => {
    return dispatch => {
        axios.get("/bounties")
            .then(response => {
        dispatch({
            type: "GET_BOUNTIES",
            bounties: response.data
        });
        })
    .catch(err => {
        return {
            type: "ERR_MSG",
            err: "Data Unavailable"
        }
    })
    }
};

export default bountyReducer;