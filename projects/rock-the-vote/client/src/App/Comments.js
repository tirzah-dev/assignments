import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editIssue } from '../redux/issues';


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        }
    }
    handleComment(e){
        let {value} = e.target;
        this.setState ({
            comment: value
        });
    }
    submitComment(e){
        e.preventDefault();
        let { currentIssue } = this.props;
        let { comment } = this.state;
        this.currentIssue.comments.push(comment);
        this.props.editIssue(currentIssue);
        this.clearInput();
    };
    render(){
        return (
            <div className="comments">
                <h4>Comments</h4>
                {/* <h4>{this.comments}</h4> //check how to toggle display */}
            </div>
        )
    };
};

export default connect(state=>state, { editIssue })(Comments);