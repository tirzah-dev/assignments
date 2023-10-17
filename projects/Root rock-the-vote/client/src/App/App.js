import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../redux/issues';

//import components
// import EditForm from './EditIssue';
import List from './List';
import NewIssueForm from './NewIssueForm';

class App extends Component {
    componentDidMount() {
        this.props.getIssues();
    }
    render() {
    return (
        <div>
            <h1>ROCK THE VOTE</h1>
            <NewIssueForm />
            <List />
            <footer>
                <ul className="footer">
                    <li>&copy; 2018</li>
                    <li>By, Tirzah Evangelista</li>
                </ul>
            </footer>
        </div>

    )
    }
}

export default connect(null, { getIssues })(App);
