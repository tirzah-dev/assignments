import React, { Component } from "react";

import  { connect } from "react-redux";
import { editIssue } from "../redux/issues";

class Vote extends Component{
    
    
    render(props){
        let { id, editIssue, totalVotes} = this.props;
        const handleUpVote = (e) => {
            let { id, editIssue, totalVotes } = this.props;
            editIssue(id, { totalVotes: Number(totalVotes) + 1 });
        }
        const handleDownVote = (e) => {
            const { id, editIssue, totalVotes } = this.props;
            editIssue(id, { totalVotes: Number(totalVotes) - 1 });
        }
        return (
             <div className="vote">Vote: 
                    <button className="up-vote" onClick={handleUpVote}>&and;</button>
                    <button className="down-vote" onClick= {handleDownVote} >&or;</button>
                    Total Votes:
                </div>
        )
    }
}

export default connect(state => state, { editIssue })(Vote);