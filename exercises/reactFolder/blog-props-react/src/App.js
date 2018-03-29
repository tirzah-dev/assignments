import React from "react";
import Blog from "./Blog/";
import "./style.css"

function App (){
    const blog1 = {
        title: "lorem",
        post: "dahoueaoaeh",
        postClass: "red"
    }
    const blog2 = {
        title: "THIS IS BLOG 2",
        post: "lade da de dah",
        postClass: "purple"
    }
    const blog3 = {
        title: "I'ma writing three",
        post: "bunch o words here",
        postClass: "blue"
    }
    const blog4 = {
        title: "And 4th goes to blog",
        post: "filler text"
    }
    return (
        <div>
        HELLO WORLD
            <Blog {...blog1}></Blog>
            <Blog {...blog4}></Blog>
            <Blog {...blog3}></Blog>
            <Blog {...blog2}></Blog>
        </div>
    )
}

export default App;