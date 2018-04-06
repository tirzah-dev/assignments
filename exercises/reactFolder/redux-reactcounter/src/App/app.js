import React from "react";
import { connect } from "react-redux";
import {increment, decrement, half, double} from "../redux";


function App(props){
        return(
            <div className="app">
                <button onClick={props.half} className="half">half</button>
                <button onClick={props.decrement} className="minus">-</button>
                <h1>{props.counter}</h1>
                <button onClick={props.increment} className="plus">+</button>
                <button onClick={props.double} className="double">double</button>
            </div>
        )
}

function mapStateToProps(state) {
    return{
        counter: state
    }
}

export default connect(mapStateToProps, {decrement, increment, half, double})(App);