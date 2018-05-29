import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteIssue } from '../redux/issues';
import EditIssue from './EditIssue'; //need to finish edit
import Comments from './Comments';//need to finish comments

const Issue = (props) => {
    const { loading, errMsg } = props;
    if (loading) {
        return <p className="loading">Loading...</p>
    }
    if (errMsg) {
        return <p className="errMsg">{ errMsg }</p>
    }
    const handleDelete = (e) => {
        props.deleteIssue(props.issue._id);
    }
    return (
        <div>
            <section className="issue">
                <div>
                    <h3>Issue Title: { props.issue.title }</h3>
                    <p>Description: { props.issue.description }</p>
                    <Comments />
                    {/* edit button start */}
                    <Link to={"/edit-form/" + props.issue._id}  className="editLink"><button>Edit Issue</button></Link>
                    {/* edit button end */}
                    <button onClick= {handleDelete} className="deleteIssue">Delete Issue </button>  
                </div>
                <EditIssue />
            </section>
        </div>
    );
}

export default connect(state => state, { deleteIssue })(Issue);
