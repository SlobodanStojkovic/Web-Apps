import React, { Component } from "react";
import Header from "./component/Header/Header";
import BlogList from "./component/BlogList";

class App extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        blogTitle: "My React Blog",
        articles: [
            { articleTitle: "First article title", articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus! Dicta aspernatur ullam, tempora maiores minima voluptatum reiciendis cum, architecto ducimus dolorum fugit, eveniet corrupti error. Nostrum earum vel quaerat?", },
            { articleTitle: "Second article title", articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum ab praesentium, voluptas amet fuga laudantium animi minus alias expedita voluptatibus obcaecati? Ea neque quas cupiditate animi earum eius nisi veritatis quaerat officia! Alias perferendis laboriosam sint non quibusdam corrupti.", },
            { articleTitle: "Third article title", articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error commodi, illum ipsum suscipit labore possimus aliquam sequi aut excepturi.", },
            { articleTitle: "Fourth article title", articleBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ratione distinctio iste odit consequuntur modi animi. Ad, quidem omnis deserunt quisquam modi voluptate optio ab.", },
            { articleTitle: "Fifth article title", articleBody: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolore debitis autem corporis hic at necessitatibus magni itaque perferendis modi dolor ducimus eveniet, dicta libero doloremque aliquam quidem optio ullam.", },
            { articleTitle: "Sixth article title", articleBody: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquid harum id deserunt, tempora iusto similique adipisci ad veritatis tenetur unde rerum ab consequatur perferendis vero, numquam alias laudantium esse corporis cupiditate repellat, fugiat earum.", },
        ],
    }
    render() {
        return (
            <div className="wrapper">
                <Header blogTitle={this.state.blogTitle} />
                <BlogList articles={this.state.articles} />
            </div>
        )
    }
}

export default App;
