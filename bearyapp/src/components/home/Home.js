import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Home.css';

function Home() {
  return (
    <div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} class="header">
      <h1>Beary</h1>
      <Link className="home__button-link center" to={"./../Home"}>
        <h2>Home</h2>
      </Link>
      <Link className="home__button-link center" to={"./../Congifure"}>
        <h2>Configure</h2>
      </Link>
      <Link className="home__button-link center" to={"./../Logs"}>
        <h2>Logs</h2>
      </Link>
    </div>
    
    </div>
  );
}

export default Home;