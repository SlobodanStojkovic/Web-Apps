import React, { Fragment } from "react";
import Blog from "./Blog/Blog";

const BlogList = ({ articles }) => {
    let copyArticles = articles.map((article, index) => {
        return (<Blog articleTitle={article.articleTitle} articleBody={article.articleBody} key={index} />)
    }
    )
    return <Fragment>
        {copyArticles}
    </Fragment>
}

export default BlogList;