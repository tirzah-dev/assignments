import React from "react";
import Pet from "./Pet.js";

const Friend = props =>
    <li className="friend">
        <h1 className="friendName">{props.human.name} <span className="friendAge">Age: {props.human.age}</span></h1>
        
        <ul className="pets">Pet(s):
            {props.human.pets.map((animal, i) => <Pet key={animal.name + i} pet={animal}></Pet>)}
        </ul>
    </li>



export default Friend;