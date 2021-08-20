import './App.css';
import { Header } from "./Components/Header/Header";
import { Users } from "./Components/Users/Users";
import { Footer } from "./Components/Footer/Footer";
import { Button } from "./Components/Button/Button";
import { useState } from 'react';




function App() {

  const [isListView, setIsListView] = useState(true);

  const onLayoutChange = () => {
    setIsListView(!isListView)
  }

  return (
    <div className="App">
      <Header />
      <Button isListView={isListView} onLayoutChange={onLayoutChange} />
      <Users isListView={isListView} />
      <Footer />
    </div>
  );
}

export default App;
