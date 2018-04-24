import axios from 'axios';


const artsyApiUrl = "https://api.artsy.net:443/api/artworks?";
const artsyApiToken = "&xapp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUyNDE2MTQ2MSwiaWF0IjoxNTIzNTU2NjYxLCJhdWQiOiI1YWNmYTEzNDI3NWIyNDRmNjY5ODM0YmQiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWFjZmExMzU3NjIyZGQyY2Y3YWVkZGViIn0.hd5S3zWzUuC63YBtNZjGnD1pR3lPAnk9G1UZV5HJCog"

const initialState = {
    artData: [],
    nextPage: "",
    loading: true,
    errMsg: ""
}
const artworkReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ART":
            return action.state;
        case "GET_NEXT_SET":
            return action.state;
        default:
            return state;
    }
}

export const getArt = () => {
    return (dispatch) => {
        axios.get(artsyApiUrl + artsyApiToken)
            .then(response => {
                const { artworks } = response.data._embedded;
                const { href } = response.data._links.next;
                dispatch({
                    type: "GET_ART",
                    state: {
                        artData: artworks,
                        nextPage: href,
                        loading: false
                    }
                })
            })
        // .catch(err => {
        //     console.err(err.message);
        // })
    }


}
export const getNextPage = (nextPageURL) => {
    return (dispatch) => {
        axios.get(nextPageURL)
            .then(response => {
                console.log("should be nextset", response.data);
                console.log("nextHref", response.data._links.next)
                const { artworks } = response.data._embedded;
                const { nextHref } = response.data._links.next;
                dispatch({
                    type: "GET_NEXT_SET",
                    state: {
                        artData: artworks,
                        nextPage: nextHref,
                        loading: false
                    }
                })
            })
            .catch(err => {
                console.error(err.message);
            })
    }
}
export default artworkReducer;
