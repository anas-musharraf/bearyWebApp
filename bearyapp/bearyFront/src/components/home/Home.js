import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Home.css';
import BodyBackgroundColor from "react-body-backgroundcolor";

import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div>
    <BodyBackgroundColor backgroundColor='#fffef6'>
    </BodyBackgroundColor>
    <div className={"header"}>
        <Link to="/" className={"Links"}><h1>Beary</h1></Link>
    </div>

    <div>
        <Link to="/configure" className={"Links"}><Button className={"ConfigButton"} variant="warning">Configure</Button></Link>
        <Link to="/logs" className={"Links"}><Button className={"LogButton"} variant="warning">Response Logs</Button></Link>
        <Link to="/interactionlogs" className={"Links"}><Button className={"InteractionLogButton"} variant="warning">Interaction Logs</Button></Link>
    </div>
    </div>
);
}

export default Home;