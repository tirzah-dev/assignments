import React from "react";

function Blog(props) {
    const { title, post, postClass} = props;
    return (
        <div className={postClass}>
            <h3>{title}</h3>
            <p>{post}</p>
        </div>
    )
}
export default Blog;