import React from 'react';
import Cards from "./Cards";
import vacationSpots from "./data";

const Cardlist = () =>
    <div className = "cardlist">
        {vacationSpots.map((local, i) => <Cards key={local.place + 1} vacation = {local} index={i} />)}
    </div>

export default Cardlist;