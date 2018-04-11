import React from 'react'

function Planet(props){
    const {name, diameter, population, climate} = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>Diameter: {diameter}</p>
            <p>Population: {population}</p>
            <p>Climate: {climate}</p>
        </div>
    )
}
export default Planet;