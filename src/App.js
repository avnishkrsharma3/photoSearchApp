
import './App.css';
import React from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import FetchImages from './components/FetchImages.js';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () =>{
  const [pageNumber] = useState(1);
  const [progress, setProgress] = useState(0);
  const [apiKey] = useState("2aQ_lT6fcJQpbMod6GJjK3RsgQqKYSLbYeJM2Nq9OM8");
  // https://api.unsplash.com/search/photos?page=1&query=office&client_id=2aQ_lT6fcJQpbMod6GJjK3RsgQqKYSLbYeJM2Nq9OM8
  const [search] = useState("");
  const [query] =useState("");
  return (
    <div>      
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress} 
        height = {3}
      />
        <Navbar/>
        <Routes>
        <Route exact path="/" element = {<FetchImages search={search} query={query} pageNumber = {1} apiKey ={apiKey} progress={progress}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
