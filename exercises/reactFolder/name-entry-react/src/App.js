import React, { Component } from 'react';


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            // name:"",
            // names:[]
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlesubmit = this.handleSubmit.bind(this);
    }
    //  START WORKING HERE
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert("A name was submitted: " + this.state.value);
        console.log (this.state.value)
        // this.setState.name( name => input.value)
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="name"/>
                <button>submit</button>
            </form>
            <ul>
                {/* {this.state.names.map(name => <li>{name}</li>)} */}
            </ul>
        </div>
        )
    //list of names after they are entered
}
};
export default App;