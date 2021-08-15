import React from 'react';
import './Navigation.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation-main-div">
            <h2 className="navigation-header-h">Poll Simulator</h2>
            <div className="navigation-navlinks-div">
            <p className="navigation-navlinks-p">
              <Link to="/add"><span className="navigation-navlinks-text">Add Candidate</span></Link>
            </p>
            <p className="navigation-navlinks-p">
              <Link to="/vote"><span className="navigation-navlinks-text">Vote</span></Link>
            </p>
            <p className="navigation-navlinks-p">
              <Link to="/winner"><span className="navigation-navlinks-text">Poll Result</span></Link>
            </p>
            <p className="navigation-navlinks-p">
              <Link to="/result"><span className="navigation-navlinks-text">Voting Summary</span></Link>
            </p>
            </div>
        </div>
    );
}

export default Navigation;
