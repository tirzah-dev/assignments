import React from "react";
import boards from "../../images/surf-boards.png";

function About(){
    return(
        <about>
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde non magnam facilis. Amet quae ab provident animi quas ipsam? Reprehenderit ratione adipisci similique necessitatibus id aliquid sequi eos vitae sit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore culpa iure a asperiores velit maxime facilis eos, explicabo dolores optio rem qui? Suscipit, quaerat voluptatibus. Temporibus hic quisquam consectetur?
            </p>
            <img className="surf-boards" src={boards} alt="top half of surf boards"/>
        </about>
    )
}
export default About;