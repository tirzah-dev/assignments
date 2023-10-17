import React from 'react';
// import { connect } from 'react-redux';
// import {Link} from 'react-router-dom'; for use with handleEdit.
// import { deleteIssue } from '../redux/issues'; need for handleDelete.

// import Vote from "./Vote";

const Issue = (props) => {
// class Issue extends 
        console.log ("checkin' da Props" + props);
    
        //const handleEdit
        return (
            <div>
                <section className="issue">
                    {/* <Vote /> */}
                    <div>
                        <h3>Issue Title: { props.title }</h3>
                        <p>issue description</p>
                        {/*  */}
                        {/* <Link to="{"/edit-form/" + issue[0]._id}"><button onClick= {this.handleEdit} className="editIssue">Edit Issue </button></Link> */}
                    </div>
                </section>
            </div>
        )
    // }   
}

export default Issue;
// const mapToStateToProps = (state) => {
//     return state.issues
// }

// export default connect (mapToStateToProps, { deleteIssue }) (Issue);