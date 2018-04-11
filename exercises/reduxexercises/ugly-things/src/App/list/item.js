import React from 'react';
import EditForm from '../form/edit-form';

import { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            isEditing: false
        }
        // this.state = this.initialState;
    }

    toggle = () => this.setState({ 
        isEditing: !this.state.isEditing
    })

    render() {
        const { imgURL, caption, deleteCat, index } = this.props;
        if (this.state.isEditing) {
            return (
            <div>
                <EditForm index={index} imgURL={imgURL} caption={caption}></EditForm>
            </div>
            )
        }else {
            return (
                <div className="kitty">
                    <img className="image" src={imgURL} alt='' />
                    <p>{caption}</p>
                    <button className="byebtn" onClick={() => deleteCat(index)}>Bye Bye Ugly</button>
                    <button className="editbtn" onClick={this.toggle}>Edit Ugly</button>
                </div>
            )
        }
    }
}

export default Item;