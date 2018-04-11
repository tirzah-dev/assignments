import React from 'react';
import { Link } from 'react-router-dom';

function Character(props){
    const { index } = props;
    return(
        <li>
            <Link to="/character/">{ index }</Link>
        </li>
    )
}

export default Character;