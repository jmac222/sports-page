import { useState } from "react";
import Teams from "./components/Teams";
import Navbar from "./layout/Navbar";
import './styles/main.css'

import { linkContext } from "./util/context";
function App() {
  const [link, setLink] = useState('')
  const [leagueName, setLeagueName] = useState('')
  return (
    
    <linkContext.Provider value = {{link, setLink, leagueName, setLeagueName}}>
      <h1>AllSports API</h1>
      <Navbar />
      <Teams />
    </linkContext.Provider>
  );
}

export default App;
