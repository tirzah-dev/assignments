import React from "react";

const Cards = props => 
    <li className="card">
        <h2>{props.vacation.place}</h2>
        <p>Price: ${props.vacation.price}</p>
            {/* switch(props.vacation.price){
                case > 1000:
                    <h4>$$$</h4>
                    break;
                case =< 500:
                    <h4>$</h4>
                    break;
                default:
                    <h4>$$</h4>
            } */}
        
        <p>Best Season:  {props.vacation.timeToGo}</p>
            {/* switch(props.vacation.timeToGo) {
                case Spring:
                {style: "backgroundColor": "#99C24D"}
                break;
                case Fall:
                {style: "backgroundColor": "#F2B259"}
                break;
                case Summer:
                {style: "backgroundColor": "#F5FF90"}
                default:
                {style: "backgroundColor": "#FFFFFF"}
            }     */}
    </li>

export default Cards;