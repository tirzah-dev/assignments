import React from 'react'

function Item (props){
    const { imgURL, caption, deleteCat, index } = props;
    console.log(props);
    return (
        <div className="kitty">
            <img className="image" src={imgURL} alt = '' />
            <p>{caption}</p>
            <button className="byebtn" onClick={() => deleteCat(index)}>Bye Bye Ugly</button>
        </div>
    )
}

export default Item;