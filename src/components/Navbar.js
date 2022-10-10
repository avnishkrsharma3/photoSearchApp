

import React from 'react'
import "./Navbar.css";
import { useState } from 'react';
import home from "./home.png";
import Search from './Search.js';



const  Navbar = (props) => {
  const[query, setQuery] = useState('');
  const[showComponent, setShowComponent] = useState(false);
 
  const middleWare = () =>{
    let query = document.getElementById('search').value;
    console.log(query);
    setShowComponent(true);
  }
  return (
    <>
      <div className = "fixed">
        <div id = "navbar">
            <button className="column" id = "home">Home</button>
            <input className = "column" id = "search" type="text" placeholder='Search' ></input>
            <button className='column'  id = "searchBtn" onClick={middleWare}>Search</button>
            <button className = "column" id="login">LogIn</button>
            <button className = "column" id="logout">LogOut</button>    
        </div>
        </div>
        {
          showComponent?<Search query = {query}/>:<Search/>
        }
    </>
  )
}

export default Navbar;
