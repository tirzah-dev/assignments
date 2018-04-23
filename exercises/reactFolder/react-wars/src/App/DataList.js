import React from 'react';
import { Link } from "react-router-dom";

function DataList(props) {
    console.log(props);
    const { people } = (props);
    const peopleList = people.map((person, i) => <Link key={person.name + i} to={`/character/${i + 1}`}>{person.name}</Link>)
    return (
        <ul className="sidebarlist">
            {peopleList}
            <Link to="/">Home</Link>
        </ul>
    )
}


export default DataList;