import React from 'react';
import Person from './Person';

function DataList(props){
    console.log(props);
    const {people} = (props);
    const peopleComponent = people.map((person, i) => <Person key={person.name +i} {...person} />)
    return(
        <ul>
            {peopleComponent}
        </ul>
    )
}


export default DataList;