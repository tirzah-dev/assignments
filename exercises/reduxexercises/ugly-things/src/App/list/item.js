import React from 'react'
import EditForm from '../form/edit-form'

function Item(props) {
    const { imgURL, caption, deleteCat, index } = props;
    return (
        <div className="kitty">
            <img className="image" src={imgURL} alt='' />
            <p>{caption}</p>
            <button className="byebtn" onClick={() => deleteCat(index)}>Bye Bye Ugly</button>
            {/* <button className="editbtn" onClick={() => ()
                //pop up edit-form
                }>Edit Ugly</button> */}
            <EditForm index={index} imgURL={imgURL} caption={ caption }></EditForm>
        </div>
    )
}

export default Item;