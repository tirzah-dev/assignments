import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";

import { editIssue } from '../redux/issues';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        };
    }
    handleIssueChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }
    
    handleSubmit = (e) => {
        console.log("thisone", this.props);
        e.preventDefault(e);
        this.props.editIssue(this.props._id, this.state);
    }
    render() {
        return (
            <div>
                <header>
                    <h4>EDIT ISSUE</h4>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Issue Title:
                        <input name="title" value={this.state.title} onChange={this.handleIssueChange} />
                    </label>
                    <label htmlFor="">Description:
                        <input name="description" type="text" value={this.state.description} onChange={this.handleIssueChange} />
                    </label>
                    <button className="createIssueButton">Save Edit</button>
                    <Link to="/App" className="cancel"><button>Cancel</button></Link>
                </form>
                <div className="footer">
                    <ul className="footer">
                        <li>&copy; 2018</li>
                        <li>By, Tirzah Evangelista</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default connect(null, { editIssue })(EditForm);
