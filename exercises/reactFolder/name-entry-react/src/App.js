import React from 'react';

constructor = () => {
    this.initialState = {
        inputs:{
            firstName: "",
            lastName: "",
            email: ""
        },
        people: []
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange = (e) => {
    const { value, name} = e.target;
    console.log(e.target);
    this.setState(prevState => {
        return {
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => {
        return {
            //reset the form inputs to their original state, and include new object in the array
            inputs: this.initialState.inputs,
            people: [...prevState.people, prevState.inputs]
        }
    })
}

render = () => {
    const { firstName, lastName, email } = this.state.inputs;
    const {people} = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
            <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Type here"/>
            <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@Email"/>
            <button>Submit</button>
            <ul>
                <li></li>
            
        </form>
    )
}

const List = () =>{
    const personObj = people.map(personObj =>
    person = {personObj},
    return(
        <li>
            {personObj}
        </li>
    )
)}


const Person = () => {
    return(
        <div>
            <h2>
                onSubmit={(e)=>
                this.handleSubmit(this.state.people)}
                style = {{
                    fontSize: "25px",
                    color: "#3B444C"
                }}
            </h2>
        </div>
    )
}

export default App;