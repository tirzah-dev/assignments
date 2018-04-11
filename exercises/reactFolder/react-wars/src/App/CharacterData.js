import React, {Component} from 'react'
import Axios from "axios";

const swApiURL = "https://swapi.co/api/";

class CharacterData extends Component{
    constructor(){
        super();
        this.state = {
            characterData: {},
            errMsg: "",
            loading: true
        }
    }
    
    componentDidMount(){
        
        console.log('character props', this.props);
        let {index} = this.props.match.params;
        this.getCharacter(index);
        
    }
    componentWillReceiveProps(nextProps){
        let {index} = this.props.match.params;
        let nextIndex = nextProps.match.params.index;
        if (nextIndex !== index){
            this.getCharacter(nextIndex);
        }
    }
    
    getCharacter = (index) => {
        Axios.get(swApiURL + "people/" + index)
            .then(response => { 
                this.setState({
                    characterData: response.data,
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
        const {name, hair_color, skin_color, height, mass } = this.state.characterData;
        return(
            <li>
                <h1>{name}</h1>
                <h3>Hair color: {hair_color}</h3>
                <h3>Skin color: {skin_color}</h3>
                <h3>Height: {height}</h3>
                <h3>Mass: {mass}</h3>
            </li>
        )
    }
}

export default CharacterData;