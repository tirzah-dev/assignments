import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Issue from "./Issue";
// import Nav from "./Nav";

const HomePage = (props) => {
    //componentdidmount
    //.get
    const { loading, data, errMsg } = props.events;
    if (loading){
        return <p className="loading">loading...</p>
    }
    if (errMsg){
        return <p>{errMsg}</p>
    }
    const Issue = data.sort((issueA, issueB) => {
        //sort by total votes highest number top and lowest bottom
    }).filter(props.filterCallback).map(issue =>{
        return (
            <Issue key={issue._id} issue={issue} />
        )
    })
    return (
        <div className='Issues'>
            {/* <Nav /> */}
            <header>
                <h1>Issues Here</h1>
            </header>
            <main>
                <button className='yesBtn'>0</button>
                {/* {issues} */} <p>Issue</p>
                <button className='noBtn'>0</button>
            </main>
            <footer>
                <button>Add Issue</button>
                <button>Delete Issue</button>
            </footer>


        </div>
    )
    
}
export default HomePage;