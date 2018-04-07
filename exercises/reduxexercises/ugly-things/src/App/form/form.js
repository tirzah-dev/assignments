import React, {Component} from 'react';
import { addCat } from "../../redux/cats";

import { connect } from "react-redux";


class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                imgURL: "",
                caption: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState(prevState =>{
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]:value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        // dispatch action which contains a type "ADD_CAT" and the actual input data
        this.props.addCat(this.state.inputs);
        this.setState(this.initialState);
    }
    
    render() {
        const { imgURL, caption } = this.state.inputs;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Our Favorite Ugly Things:</h1>
                <input onChange={this.handleChange} name="imgURL" value={imgURL} type="text" placeholder="Image URL"/>
                <input onChange={this.handleChange} name="caption" value={caption} type="text" placeholder="Enter Caption"/>
                <button>Submit</button>
            </form>
        )
    }
}
//connect the global store to form
export default connect(null, { addCat }) (Form);