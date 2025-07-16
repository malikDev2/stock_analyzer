import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home.jsx";
import Pres from './pages/pres.js';
import Trends from './pages/trends.js';
import Time from './pages/time.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/presidencies" element={<Pres/>}/>
          <Route path="/timeline" element={<Time/>}/>
          <Route path="/trends" element={<Trends/>}/>

        </Routes>

      </HashRouter>

    
  )
}

export default App
