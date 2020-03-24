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
                <Link to="/" className={"Links"}><h1>Beary</h1></Link>
            </div>
            <div className={"Navigation"}>
                <Link className={"NavLinks"} to="/configure"><h5> Configure </h5></Link>
                <Link className={"NavLinks"} to="/logs"><h5> Logs </h5></Link>
            </div>


            <h4 className={"Headings"}>CONFIGURE</h4>


            <div className={"Table"}>
                <div className="row">
                    <div className={"col-sm-3"}>Time</div>
                    <div className={"col-sm-3"}>Emotion</div>
                    <div className={"col-sm-6"}>Conversation</div>
                </div>


            </div>



        </div>
    );
}

export default Logs;