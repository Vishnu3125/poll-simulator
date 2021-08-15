import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navigation from "../navigation/Navigation";
import "./Result.css"

const Result = () => {
    const [candidates, setcandidates] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/voteSummary")
        .then(response => {
            setcandidates(response.data)
        })
        
    }, []);

    return (
        <div className="result-main-div">
            <Navigation/>
            <p className="result-main-heading">Vote Summary</p>
            <table className="result-main-table">
                <tr className="result-table-head-rows">
                    <th className="result-table-box">Name</th>
                    <th className="result-table-box">Votes</th>
                </tr>
            {candidates && candidates.map((candidate)=>(
                <tr className="result-table-rows">
                    <td className="result-table-box">{candidate.name}</td>
                    <td className="result-table-box">{candidate.votes}</td>
                </tr>
            ))}
            </table>
        </div>
    );
}


export default Result;
