import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navigation from "../navigation/Navigation";
import "./Result.css"
import { Bar, Line } from 'react-chartjs-2';

const data = {
    labels: [],
    datasets: [
      {
        barPercentage: 1,
        label: 'Number of Votes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 206, 86, 0.9)',
          'rgba(75, 192, 192, 0.9)',
          'rgba(153, 102, 255, 0.9)',
          'rgba(255, 159, 64, 0.9)',
        ],
        borderWidth: 0,
      },
    ],
};

const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Votes per candidates',
      },
    },
};

const Result = () => {
    const [candidates, setcandidates] = useState(0);
    const [chart, setchart] = useState(0);
    const [chartfetch, setchartfetch] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/voteSummary")
        .then(response => {
            console.log(response.data)
            data.labels.length = 0
            data.datasets[0].data.length = 0
            setcandidates(response.data)
            setchart(1)
        })
    }, []);

    useEffect(() => {
        chart && candidates.map((candidate)=> {
            data.labels.push(candidate.name)
            data.datasets[0].data.push(candidate.votes)
            setchartfetch(1)
            // console.log(data.labels)
        })
    }, [chart]);

    
    
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
            <div className="result-chart-main-div">
            {chartfetch ? <Bar data={data} options={options}/> : "Loading.."}
            </div>
        </div>
    );
}


export default Result;
