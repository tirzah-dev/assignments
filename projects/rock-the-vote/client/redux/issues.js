import axios from 'axios';

const initialIssueState = {
    data: [],
    loading: true,
    errMsg: ''
}

const issueReducer = (state = initialIssueState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
        return{
            ...state,
            loading: false,
            data: [...state.data, action.issues]
        }
        case 'GET_ISSUES':
        return{
            ...state,
            loading: false,
            data: action.issues
        }
        case 'DELETE_EVENT':
        return{
            ...state,
            loading: false,
            data: state.data.filter(issue => issue._id !== action.id)
        }
        case 'EDIT_ISSUE':
        return{
            ...state,
            loading: false,
            data: state.data.map(issue => {
                if(issue._id === action.id) {
                    return action.editedIssue
                }else {
                    return issue
                }
            })
        }
        default:
        return state;
    }
}

export const createIssue = (inputs, goToLocation) => {
    return dispatch => {
        axios.post('/api/issues', inputs)
            .then(response => {
                dispatch({
                    type: 'CREATE_EVENT',
                    event: response.data
                });
                goToLocation('/all-issues');
            })
    }
}
export const getIssues = () => {
    return dispatch => {
        axios.get('/api/issues')
            .then(response => {
                dispatch({
                    type: 'GET_ISSUES',
                    issues: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: 'ERR_MSG',
                    errMsg: 'Data Unavailable'
                });
            });
    }
}

export const deleteIssue = (id) => {
    return dispatch => {
        axios.delete('/api/issues/' + id)
            .then(response => {
                dispatch({
                    type: 'DELETE_ISSUE',
                    id
                })
            })
            .catch(err => {
                dispatchd({
                    type: 'ERR_MSG',
                    errMsg: 'Data Unavailable'
                });
            });
    }
}
export const editIssue = (id, inputs, goToLocation) => {
    return dispatch => {
        axios.put('/api/issues/' + id, inputs)
        .then(response => {
            dispatch({
                type: 'EDIT_ISSUE',
                editedIssue: response.data,
                id
            })
            goToLocation('/issue/' + id)
        })
        .catch(err => {
            dispatch({
                type: 'ERR_MSG',
                errMsg: 'Edit Data Unavailable'
            });
        });
    }
}

export default issueReducer;