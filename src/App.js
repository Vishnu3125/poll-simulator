import React from "react";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Poll Simulator </h1>
      <nav>
          <ul>
            <li>
              <Link to="/add">Add Candidate</Link>
            </li>
            <li>
              <Link to="/vote">Vote</Link>
            </li>
            <li>
              <Link to="/winner">Poll Result</Link>
            </li>
            <li>
              <Link to="/result">Voting Summary</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default App;
