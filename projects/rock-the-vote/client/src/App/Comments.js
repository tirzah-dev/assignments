import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editIssue } from '../redux/issues';


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    handleComment = (e) => {
        const {value} = e.target;
        this.setState ({
            comment: value
        });
    }
    clearInput = () => {
        this.setState({
            comment: ""
        });
    }
    submitComment = (e)=>{
        e.preventDefault();
        let { currentIssue } = this.props;
        let { comment } = this.state;
        currentIssue.comments.push(comment);
        this.props.editIssue(currentIssue._id, currentIssue);
        this.clearInput();
    };
    render(){
        let { currentIssue } = this.props;
        return (
            <div className="comments">
                <form onSubmit={this.submitComment}>
                    <label htmlFor="">Comment:
                    <input name="comment" value={ this.state.comment}
                    onChange={ this.handleComment} /> </label>
                    <button className="createIssueButton">Submit Comment</button>
                </form>
                <h4>Comments</h4>
                <ul>
                    { currentIssue.comments.map(comment => <li>{ comment }</li>
                    )}
                </ul>
            </div>
        )
    };
};

export default connect(state=>state, { editIssue })(Comments);