import React from 'react'

function Color(props){
    console.log(props);
const {hex, name} = props;
    return(
        //  
        <div style={{backgroundColor: {hex}}}>
            <h1>{name}</h1>
            <h1>What' the Hex? #{hex}</h1>
            {/* <button>Change color</button> */}
        </div>
    )
}

export default Color;