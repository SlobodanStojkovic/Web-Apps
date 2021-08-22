import React, { Component } from "react";
import { getBlogs } from "../Services/BlogService";
import "./BlogList.css";


export class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        }
    }

    componentDidMount() {
        getBlogs()
            .then(blogs => {
                this.setState({ blogs })
            });
    }

    render() {
        return (
            < div className="blogList" >
                {this.state.blogs.map((post, index) => (
                    <div className="blogItem" key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div >
                ))};
            </div >
        )
    }
};