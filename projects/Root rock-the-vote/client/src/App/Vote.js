import React, { Component } from "react";

import  { connect } from "react-redux";
import { editIssue } from "../redux/issues";

class Vote extends Component{
    handleUpVote = (e) => {
        let { id, editIssue, totalVotes } = this.props;
        editIssue(id, { totalVotes: Number(totalVotes) + 1 });
    }
    handleDownVote = (e) => {
        const { id, editIssue, totalVotes } = this.props;
        editIssue(id, { totalVotes: Number(totalVotes) - 1 });
    }
    render(props){
        let { id, editIssue, totalVotes} = this.props;
        return (
             <div className="vote">Vote: 
                    <button className="up-vote" onClick={this.handleUpVote}>&and;</button>
                    <button className="down-vote" onClick= {this.handleDownVote} >&or;</button>
                    Total Votes: { this.props.totalVotes }
                </div>
        )
    }
}

export default connect(state => state, { editIssue })(Vote);