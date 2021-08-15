import React, {useRef, useState, useEffect } from 'react';
import axios from 'axios'; 

const Vote = () => {

    const voterId = useRef("null");
    
    const [status, setstatus] = useState(null);
    const [value, setvalue] = useState(0);
    const [candidates, setcandidates] = useState(false);

    function addVote() {
        const data = voterId.current
        var voter = (data['voterId'].value)
        var candidate = document.getElementsByName("radio");
        var selectedCandidate = 0
        for(let i = 0; i < candidate.length; i++) {
            if(candidate[i].checked){
                selectedCandidate = (candidate[i].value)
            }
        }

        axios.post('http://127.0.0.1:5000/vote', {"selectedCandidate" : selectedCandidate, "voterId" : voter})
            .then(response => {
                const validify = response.data;
                console.log(typeof(validify))

                if(validify.response === 202)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 203)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 204)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 200)
                    setstatus(<p>{validify.message}</p>)
            });
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                // console.log((response.data))
                // Object.keys(response.data).map((da) => {console.log(da); console.log(response.data[da])})
                //console.log(JSON.parse(response.data))
                console.log(response.data)
                setcandidates(response.data)
                setvalue(1)
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <div>
            <form method="post" ref={voterId}>
            <h1>This is vote file</h1>
            Voter ID : <input type="text" name="voterId" id="voterId"/> 
                {value ? candidates.map((da) => (
                    <div>
                        <p style={{display: "inline-block"}}>{da.name}</p>
                        <input type="radio" name="radio" id={da.name} value={da.name} />
                    </div>
                )) : <div><h2>Hiii</h2></div>}
                <input type="button" value="Vote" onClick={addVote}/>
            </form>
            {status}
        </div>
    );
}


export default Vote;
