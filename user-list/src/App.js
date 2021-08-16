import './App.css';
import { Header } from "./Components/Header/Header";
import { UserList } from "./Components/UserList/UserList";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
