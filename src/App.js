import React from "react";
import {Link} from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1> Poll Simulator </h1>
      <nav>
            <div className = "app-link-add app-link">
              <Link to="/add" className="links">Add Candidate</Link>
            </div>
            <div className = "app-link-vote app-link">
              <Link to="/vote" className="links">Vote</Link>
            </div>
            <div className = "app-link-winner app-link">
              <Link to="/winner" className="links">Poll Result</Link>
            </div>
            <div className = "app-link-result app-link">
              <Link to="/result" className="links">Voting Summary</Link>
            </div>
        </nav>
    </div>
  );
}

export default App;
