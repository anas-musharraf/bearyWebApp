import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Home.css';

import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div>
    <div className={"header"}>
        <Link to={"./../Home"}><h1>Beary</h1></Link>
    </div>
    <div>
        <Button className={"ConfigButton"} variant="warning"><Link to={"./../Configure"}>Configure</Link></Button>
        <Button className={"LogButton"} variant="warning"><Link to={"./../Logs"}>Logs</Link></Button>
    </div>
    </div>
);
}

export default Home;