import React from "react";

const Cards = props => 
    <li className="card">
        <h2>{props.vacation.place}</h2>
        <p>Price: ${props.vacation.price}</p>
        {/* if (props.vacation.price < 500){
            <h4>$</h4>
        } else if (props.vacation.price >= 500 && props.vacation.price < 1000){
            <h4>$$</h4>
        }else{
            <h4>$$$</h4>
        } */}
        {/* if (props.vacation.timeToGo === Spring){
            style: "backgroundColor": "Green"
        } else if (props.vacation.timeToGo === fall){
            style: "backgroundColor": "PaleOrange" 
        } else if (props.vacation.timeToGo === Summer){
            style: "backgroundColor": "PaleYellow" 
        }else (props.vacation.timeToGo === Winter){
            style: "backgroundColor": "White" 
        }*/}
        <p>Best Season:  {props.vacation.timeToGo}</p>
    </li>

export default Cards;