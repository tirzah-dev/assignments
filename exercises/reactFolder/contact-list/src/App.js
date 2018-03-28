import React from "react";

const friends = [
    {name: "Mighty Morphin' Power Rangers", age: 24},
    {name: "Batman", age: 45},
    {name: "Wonder Woman", age: 300},
    {name: "Cat Woman", age: 26},
    {name: "Superman", age: 30},
    {name: "John", age: 21},
    {name: "Quasimodo", age: 530}
];
const friendsLis = friends.map((person, i) => 
<div key={person.name +i}> 
    <h1>{person.name}</h1>
    <li>{person.age}</li>
    );

function App() {
    return (
        <div>
            {friendsLis}
        </div>
    )
}

export default App;