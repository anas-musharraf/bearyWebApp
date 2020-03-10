import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Home.css';
import BodyBackgroundColor from "react-body-backgroundcolor";

import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className={"homePage"}>
        <BodyBackgroundColor backgroundColor='#fffef6'>
        </BodyBackgroundColor>
    <div className={"header"}>
        <Link to={"./../Home"} className={"Links"}><h1>Beary</h1></Link>
    </div>
    <div>
        <Link to={"./../Configure"} className={"Links"}><Button className={"ConfigButton"} variant="warning">Configure</Button></Link>
        <Link to={"./../Logs"} className={"Links"}><Button className={"LogButton"} variant="warning">Logs</Button></Link>
    </div>
    </div>
);
}

export default Home;