import React from 'react'

import {Switch, Route} from 'react-router-dom';
import './styles.css';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <div className="app-wrapper">
            <Header></Header>
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route exact path="/contact" component={Contact}></Route>
                    </Switch>
                </div>    
            <Footer></Footer>
        </div>
    )
}

export default App;
