import React from 'react'

function Person(props){
    const {name, hair_color } = props;
    return(
        <li>
            <h1>{name}</h1>
            <h2>{hair_color}</h2>
        </li>
    )
}

export default Person;