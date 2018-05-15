import React from "react";
import Blogpost from './Post';

function BlogList(props) {
    let blogPosts = [{
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        date: 'September 24, 2018'},
    {
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subtitle: '',
        date: 'September 18, 2018'
    },
    {
        title: "Science has not yet mastered prophecy",
        subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
        date: 'August 24, 2018'
    },
    {
        title: "Failure is not an option",
        subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
        date: 'July 8, 2018'
    }
    ]

    return (
        <div>
            {blogPosts.map(function(curr, index){ 
                return <Blogpost {...curr} key={index + curr.title}/>
            }
            )}
            
        </div>
    )
}
export default BlogList;