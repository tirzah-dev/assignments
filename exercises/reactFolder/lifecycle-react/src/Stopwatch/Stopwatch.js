import React, { Component } from 'react'

class Stopwatch extends Component {
    constructor(props){
        super(props);

    }
    
    componentWillReceiveProps(){
        console.log(this.props)
        console.log(newProps);
    }
    render (){
        const {stopwatch} = this.props;
        return (
            <div>
               {stopwatch}
            </div>
        )
    }
}
export default Stopwatch;