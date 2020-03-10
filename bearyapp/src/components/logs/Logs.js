import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/Logs.css';
import BodyBackgroundColor from "react-body-backgroundcolor";

function Logs() {
    return (
        <div>
            <BodyBackgroundColor backgroundColor='#fffef6'>
            </BodyBackgroundColor>
            <div className={"header"}>
                <Link to={"./../Home"} className={"Links"}><h1>Beary</h1></Link>
            </div>
            <div className={"Navigation"}>
                <Link className={"NavLinks"} to={"./../Congifure"}><h5> Configure </h5></Link>
                <Link className={"NavLinks"} to={"./../Logs"}><h5> Logs </h5></Link>
            </div>
        </div>
    );
}

export default Logs;