import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('/data')
            .then(response => {
                console.log("repsonfe", response.data);

                this.setState({
                    data: response.data
                })
            })
    }
    render() {
        const lemonMer = this.state.data.map((obj, i) => <div key={i}><h1>First Name: {obj.firstName}</h1><h2>Last Name: {obj.lastName}</h2><h3>Age: {obj.age}</h3></div>)

        
        console.log("lemon/mer", lemonMer);
        return (
            <div>
                {lemonMer}
            </div>
        )
    }
}


// filterDatabase({}, database);
    //returns entire database array

// filterDatabase({dolphin: "squeak!"}, database);  
//     //returns empty array

// filterDatabase({firstName: "Jack", age: 2}, database);  
//     //returns 
// [
//     {firstName: "Jack", lastName: "Smith", age: 2},
//     {firstName: "Jack", lastName: "White", age: 2}
// ]