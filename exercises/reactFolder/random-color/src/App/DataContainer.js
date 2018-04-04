import React, {Component} from 'react'
import axios from "axios";
import Color from './Color'

const colorApiURL = "http://www.colr.org/json/color/random";

class DataContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors: []
            name: 
        }
    }

    componentDidMount(){
        axios.get(colorApiURL + "colors")
        .then(response => {
            const { results } = response.data;
            this.setState({
                colors: results,
                hex: results,
                name: results,
                loading: false
            })
        })
        .catch(err => {
            this.setState ({
            errMsg: err.message,
            loading: false
            })
        })
    }
    render(){
        const { hex, name, errMsg, loading} 
        = this.state;
        if(loading){
            return <div>...Loading...Loading</div>
        }else{
            if(errMsg){
                return <p>Sorry There was an error fetching the data try again later.</p>
            }else{
                return (
                    <Color hex = {hex}/>
                )
            }
        }
    }
}
export default DataContainer;