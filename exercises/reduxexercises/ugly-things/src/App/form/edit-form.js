import React, { Component } from 'react';

import {connect } from "react-redux";
import { editCat } from '../../redux/cats'

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                imgURL: props.imgURL,
                caption: props.caption
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { value, name } = event.target;
        this.setState(prevState => {
            return{
                inputs: {
                    ...prevState.inputs,
                    [name]:value
                }
            }
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const {index, editCat} = this.props;
        editCat(index, this.state.inputs);
    }
    render(){
        const { imgURL, caption } = this.state.inputs;
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name = "imgURL" value={imgURL} type="text" placeholder="Edit Image"/>
                <input onChange={this.handleChange} name = "caption" value={ caption }type="text" placeholder="Edit Caption"/>
                <button>Save</button>

            </form>
        )
    }
}

export default connect(null, { editCat }) (EditForm);