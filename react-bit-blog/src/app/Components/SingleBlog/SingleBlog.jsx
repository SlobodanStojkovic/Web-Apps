import { getSingleBlog } from "../../../services/Services";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SingleBlog.css";


export const SingleBlog = (props) => {

    let [blog, setBlog] = useState({})

    useEffect(() => {
        getSingleBlog(props.match.params.id)
            .then(blog => setBlog(blog))
    }, [])

    return (
        <div>
            <Link to="/">{`<Back`}</Link>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
        </div>
    )
}
