import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Homepage from './Homepage';
import CharacterData from './CharacterData';
import {Switch, Route} from 'react-router-dom';

import '../style.css';

function App(){
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/character/:index" component={CharacterData}></Route>
            </Switch>
        </div>
    )
}

export default App;
//


