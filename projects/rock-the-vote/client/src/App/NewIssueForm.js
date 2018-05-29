import React, { Component } from 'react';
import { createIssue } from '../redux/issues';
import { connect } from 'react-redux';

class NewIssueForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
        };

    }
    handleIssueChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value //explain [name]
            }
        });
    }
    clearInput = () => {
        this.setState({
            title: '',
            description:'',
        });
    }
    handleSubmit = (e) => {
        e.preventDefault(e);
        this.props.createIssue(this.state);
        this.clearInput();
    }
    render() {
        return (
            <div>
                <header>
                    <h2>Create New Issue</h2>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Issue Title:
                        <input name="title" value={this.state.title} onChange={this.handleIssueChange} />
                    </label>
                    <label htmlFor="">Issue Details:
                        <input name="description" value={this.state.description} onChange={this.handleIssueChange} />
                    </label>
                    <button className="createIssueButton">Create New Issue
                    </button>
                </form>
             
            </div>
        );
    }
}
export default connect(null, { createIssue })(NewIssueForm);