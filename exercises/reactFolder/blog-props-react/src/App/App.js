import React from "react";
import Header from './Header';
import BlogList from "./Blog/BlogList";
import Footer from './Footer';
import "../style.css"

function App() {
   
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App;