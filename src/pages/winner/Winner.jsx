import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Navigation from "../navigation/Navigation";
import "./Winner.css"

const Winner = () => {
    const [winner, setwinner] = useState(0);
    const [winnerError, setwinnerError] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/winner")
        .then((response) => {
            if(response.data.response === 201 || response.data.response === 202)    
                setwinnerError(response.data.message)
            else
                console.log(response.data)
                setwinner(response.data)
        })
        
    }, []);

    return (
        <div className="winner-main-div">
            <Navigation/>
            <p className="winner-main-heading">Winner</p>
            <div className="winner-sub-heading">
            {winner ? "Winner is "+winner[0]["name"]+" with total of "+winner[0]["votes"]+" votes" : "No winner : " + winnerError}
            </div>
        </div>
    );
}


export default Winner;
