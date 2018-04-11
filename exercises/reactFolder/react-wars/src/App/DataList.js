import React from 'react';
// import Character from './Character';
import { Link } from "react-router-dom";
// import CharacterData from './CharacterData';

function DataList(props) {
    console.log(props);
    const { people } = (props);
    const peopleList = people.map((person, i) => <Link key={person.name + i} to={`/character/${i + 1}`}>{person.name}</Link>)
    return (
        <ul>
            {peopleList}
            <Link to="/">Home</Link>
        </ul>
    )
}


export default DataList;