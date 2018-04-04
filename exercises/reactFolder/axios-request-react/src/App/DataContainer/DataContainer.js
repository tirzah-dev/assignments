import React, {Component} from 'react'
import axios from "axios";
import DataList from "./DataList"

const swApiURL = "https://swapi.co/api/";

class DataContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount(){
        axios.get(swApiURL + "people")
            .then(response => {
                const { results } = response.data;
                this.setState({
                    people: results,
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
        const { people, errMsg, loading} = this.state;
        if(loading){
            return <div>...Loading</div>
        }else{
            if(errMsg){
                return <p>Sorry, your Data is not available</p>
            }else{
                return (
                    <DataList people = {people}/>
                )
            }
        }
    }
}

export default DataContainer;