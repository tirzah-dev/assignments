import React from "react";
import Nav from "./Nav/";
import Header from "./Header/";
import About from "./About/";
import Services from "./Services/";
import Footer from "./Footer/";


function App(){
    return(
        <div>
            <Nav></Nav>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    )
} 

export default App;