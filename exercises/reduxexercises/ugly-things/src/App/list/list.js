import React from 'react';

import { connect } from 'react-redux';
import Item from './item';
import  {deleteCat} from '../../redux/cats';

function List(props){
    const catComponents = props.data.map((cat, i) => <Item key={cat.imgURL + i}{...cat} deleteCat={props.deleteCat} index={i} ></Item>)
    return(
        <div className="catList">
            {catComponents}
        </div>
    )
}
const mapStateToProps = state => {
    return state.cats;
}

export default connect(mapStateToProps, { deleteCat }) (List);
