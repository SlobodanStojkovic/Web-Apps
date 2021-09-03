import { getAuthor, getSingleBlog, getAuthorPosts } from "../../../services/Services";
import { useState } from "react";
import { useEffect } from "react";
import "./SingleBlog.css";


export const SingleBlog = (props) => {


    let [blog, setBlog] = useState({});
    /*     let [author, setAuthor] = useState([]); */
    let [posts, setPosts] = useState([]);



    useEffect(() => {
        getSingleBlog(props.match.params.id)
            .then(blog => setBlog(blog))
    }, [props.match.params.id])



    /*     useEffect(() => {
            getAuthor(blog.userId)
                .then(author => setAuthor(author))
        }, [blog]) */



    useEffect(() => {
        let postsArray = [];
        getAuthorPosts(blog.userId)
            .then(posts => {
                posts.map((post) => {
                    postsArray.push(post.title)
                    return postsArray;
                })
                setPosts(postsArray)
                console.log(postsArray)
            })
    }, [blog.userId])







    return (
        <div>
            <a className="ms-5" href="/">Back</a>   {/* <Link to="/">{`<Back`}</Link> but without className*/}
            <h3 className="text-center m-4 mb-1">{blog.title}</h3>
            <h5 className="text-center">Author name</h5>
            <p className="text-center m-3 ms-5">{blog.body}</p>

            <div className="horizontalLine m-3 mt-5 ms-5 me-5 "></div>

            <p className="ms-5 me-5">3 more posts from same author</p>
            <p className="ms-5 me-5">{posts}</p>
            <p className="ms-5 me-5"></p>
            <p className="ms-5 me-5"></p>
        </div>
    )
}
