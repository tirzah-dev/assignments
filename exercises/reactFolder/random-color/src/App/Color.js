import React, {Component} from 'react'
import axios from "axios";

const colorApiURL = "http://www.colr.org/json/color/random";

class Color extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors: [],
            backgroundColor: "#DFCBD2",
            height: "100vh",
            width: "100%",
            hex: ""
        }
    }

    componentDidMount(){
        axios.get(colorApiURL)
        .then(response => {
            const { colors } = response.data;
            console.log(response.data);
            const newColor = colors.map(randColor => ("#" + randColor.hex));
            console.log(newColor);
            const finalColor = newColor.toString();
            console.log(finalColor);

            this.setState({
                backgroundColor: finalColor,
                hex: finalColor
                // loading: false
            })
        })
        // .catch(err => {
        //     this.setState ({
        //     errMsg: err.message,
        //     loading: false
        //     })
        // })
    }
    render(){
        // const { backgroundColor, errMsg, loading} 
        // = this.state;
        // if(loading){
        //     return <div>...Loading...Loading</div>
        // }else{
        //     if(errMsg){
        //         return <p>Sorry There was an error fetching the data try again later.</p>
        //     }else{
                return (
                    <div style={this.state}>
                        <h1>What' the HEX!?</h1>
                        <h2>{this.state.hex}</h2>

                    </div>
                )
            }
        // }
//     }
};
export default Color;