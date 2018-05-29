import React from 'react';
import { connect } from 'react-redux';

import Issue from './Issue';

const List = (props) => {
    const { loading, data, errMsg } = props.issues;
    if(loading){
        return <p className="loading">Loading</p>
    }
    if(errMsg){
        return <p className='errMsg'>{ errMsg }</p>
    }
    const issues = data.sort((issueA, issueB) => {
        return issueB.totalVotes - issueA.totalVotes;
    }).map(issues => {
        return (
            <Issue key={issues._id} issue={ issues } />
        )
    })
    return (
        <div className="list">
            <h4>{ issues }</h4>
        </div>
    )
}
export default connect(state => state, {})(List);

