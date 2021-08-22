import React from "react";
import Header from "./component/Header/Header";
import { BlogList } from "./component/BlogList";

const App = () => {
    return (
        <div className="App">
            <Header />
            <BlogList />
        </div>
    )
}
export default App;
