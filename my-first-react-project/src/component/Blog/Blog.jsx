import React from "react";
import "./Blog.css"

const Blog = ({ articleTitle, articleBody }) => {
    return (
        <article>
            <h3>{articleTitle}</h3>
            <p>{articleBody}</p>
        </article>
    )
}

export default Blog;