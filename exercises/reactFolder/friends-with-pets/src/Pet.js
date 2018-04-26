import React from "react";

const Pet = props =>
    <li className="pet">
        <p>Name: {props.pet.name}</p>
        <p>Breed: {props.pet.breed}</p>
    </li>

export default Pet;