import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Configure.css';

function Configure() {
  return (
    <div>
    <div className={"header"}>
      <Link to={"./../Home"} className={"Links"}><h1>Beary</h1></Link>
    </div>
    <div className={"Navigation"}>
        <Link className={"Links"} to={"./../Congifure"}><h2> Configure </h2></Link>
        <Link className={"Links"} to={"./../Logs"}><h2> Logs </h2></Link>
    </div>
    </div>
  );
}

export default Configure;