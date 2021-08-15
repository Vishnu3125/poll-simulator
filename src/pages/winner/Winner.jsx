import axios from 'axios';
import React,{useEffect, useState} from 'react';

const Winner = () => {
    const [winner, setwinner] = useState(0);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/winner")
        .then((response) => {
            console.log(response.data)
            setwinner(response.data)
        })
        
    }, []);

    return (
        <div>
            <h1>Winner</h1>
            {winner && "Winner is "+winner[0][0]+" with total of "+winner[0][1]+" votes"}
        </div>
    );
}


export default Winner;
