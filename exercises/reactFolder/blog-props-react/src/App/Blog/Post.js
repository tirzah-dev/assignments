import React from 'react'

function BlogPost (props) {
    let {title, subtitle, date} = props;
    return(
        <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        {/* <p>Posted by {author} on {date}</p> */}
        <p>Posted by Start Bootstrap on {date}</p>
        </div>
    )
}

export default BlogPost;