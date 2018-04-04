import React from 'react';
import Stopwatch from './Stopwatch'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            stopwatch: 0
        }
    }
    componentDidMount(){
        
    }
    return (){
        <div>
            <Stopwatch />
        </div>
    }
}

export default App;