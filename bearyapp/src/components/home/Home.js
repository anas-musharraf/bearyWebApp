import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Home.css';

function Home() {
  return (
    <div>
    <div className={"header"}>
      <h1>Beary</h1>
    </div>
    <div className={"Navigation"}>
        <Link className="home__button-link" to={"./../Home"}><h2 className="home__button-link"> Home </h2></Link>
        <Link className="home__button-link" to={"./../Congifure"}><h2 className="home__button-link"> Configure </h2></Link>
        <Link className="home__button-link" to={"./../Logs"}><h2 className="home__button-link"> Logs </h2></Link>
    </div>
    
    </div>
);
}

export default Home;