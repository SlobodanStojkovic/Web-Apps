import { getSingleBlog, getAuthorPosts } from "../../../services/Services";
import { useState } from "react";
import { useEffect } from "react";
import "./SingleBlog.css";
import { Link } from "react-router-dom";

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
                    postsArray.push(post.title, post.id)
                    return postsArray;
                })
                setPosts(postsArray)
                console.log(postsArray)
            })
    }, [blog.userId])


    let rand1 = () => {
        let range = 20;
        let number = Math.floor(Math.random() * range / 2) * 2;
        return number;
    }

    let rand2 = () => {
        let num = post1 + 2;
        if (num > 20) {
            num = num - 4;
        }
        return num;
    }

    let rand3 = () => {
        let num = post1 + 4;
        if (num > 20) {
            num = num - 8;
        }
        return num;
    }

    let post1 = rand1();
    let post2 = rand2();
    let post3 = rand3();

    return (
        <div>
            <a className="ms-5" href="/">Back</a>   {/* <Link to="/">{`<Back`}</Link> but without className*/}
            <h3 className="text-center m-4 mb-1">{blog.title}</h3>
            <h5 className="text-center">Author name</h5>
            <p className="text-center m-3 ms-5">{blog.body}</p>

            <div className="horizontalLine m-3 mt-5 ms-5 me-5 "></div>

            <p className="ms-5 me-5">3 more posts from same author</p>
            <Link to={`/posts/${posts[post1 + 1]}`}><p className="ms-5 me-5">{posts[post1]}</p></Link>
            <Link to={`/posts/${posts[post2 + 1]}`}><p className="ms-5 me-5">{posts[post2]}</p></Link>
            <Link to={`/posts/${posts[post3 + 1]}`}><p className="ms-5 me-5">{posts[post3]}</p></Link>
        </div>
    )
}
