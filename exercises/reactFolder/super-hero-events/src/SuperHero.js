import React from 'react'
// import data from './data.json'

function SuperHero(props){
    return(
        <div> 
            <h2 onClick={(e)=> 
                props.handleClick(props.hero)}
                style={{
                fontSize:"20px",
                color: "#888888"
                }}>
                {props.hero.name}
            </h2>
           
            
            <img onClick={(e)=> 
                props.handleClick(props.hero)}
                style ={{
                maxWidth: "250px",
                border: "4px groove silver",
                borderRadius: "3px",
                boxShadow: "5px 10px #888888"
            }} 
                src={props.hero.img} alt={props.hero.name}/>
            </div>
    )

}

export default SuperHero;