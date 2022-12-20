import React from "react";
import "../components4/Footer4.css";

function Footer4() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    {/* Column1 */}
                    <div className="col">
                        <h4>
                            Positives
                        </h4>
                        <ul>
                            <li><a href="#">342-420-6969</a></li>
                            <li><a href="#">Moscow, Russia</a></li>
                            <li><a href="#">123 Streeet South North</a></li>
                            <li><a href="#">342-420-6969</a></li>
                            <li><a href="#">Moscow, Russia</a></li>
                            <li><a href="#">123 Streeet South North</a></li>
                        </ul>
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h4>
                            Stuff
                        </h4>
                        <ul>
                            <li><a href="#">HARD EFFORTS</a></li>
                            <li><a href="#">OTHER STUFF</a></li>
                            <li><a href="#">GOOD STUFF</a></li>
                            <li><a href="#">HARD EFFORTS</a></li>
                            <li><a href="#">OTHER STUFF</a></li>
                            <li><a href="#">GOOD STUFF</a></li>
                        </ul>
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h4>
                            Resources
                        </h4>
                        <ul>
                            <li><a href="#">HARD EFFORTS</a></li>
                            <li><a href="#">OTHER STUFF</a></li>
                            <li><a href="#">GOOD STUFF</a></li>
                            <li><a href="#">HARD EFFORTS</a></li>
                            <li><a href="#">OTHER STUFF</a></li>
                            <li><a href="#">GOOD STUFF</a></li>
                        </ul>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <p className="extremeBottom">
                        &copy;{new Date().getFullYear()} 
                        My Arabic Restaurant | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Footer4;