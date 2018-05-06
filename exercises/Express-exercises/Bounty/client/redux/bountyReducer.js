import axios from 'axios';

const initialBountyState = {
    bountiesArr: [],
    loading: true,
    errMsg: "",
}
const bountyReducer = (state = initialBountyState, action) => {
    switch (action.type) {
        case "GET_BOUNTIES":
            return {
                ...state,
                loading: false,
                bountiesArr: action.bounties
            };
        case "DELETE_BOUNTIES":
            return {
                ...state,
                loading: false,
                bountiesArr: state.bountiesArr.filter(bounty => bounty._id !== action.id)
            }
        case "CREATE_BOUNTY":
            return {
                ...state,
                loading: false,
                bountiesArr: [state.bountiesArr, action.bounty]
            }
        case "EDIT_BOUNTY":
            return {
                ...state,
                loading: false,
                bountiesArr: state.bountiesArr.map(bounty => {
                    if (bounty._id === action.id) {
                        return action.editedBounty
                    } else {
                        return bounty
                    }
                })
            }
        default:
            return state;
    }
}
