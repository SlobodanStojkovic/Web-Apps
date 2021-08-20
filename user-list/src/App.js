import './App.css';
import { Header } from "./Components/Header/Header";
import { UserList } from "./Components/UserList/UserList";
import { Footer } from "./Components/Footer/Footer";
import { Button } from "./Components/Button/Button";
import { useState } from 'react';



function App() {

  const [isListView, setIsListView] = useState(false);

  const onLayoutChange = () => {
    setIsListView(!isListView)
  }

  return (
    <div className="App">
      <Header />
      <Button isListView={isListView} onLayoutChange={onLayoutChange} />
      <UserList isListView={isListView}/>
      <Footer />
    </div>
  );
}

export default App;
