import React, {useRef, useState, useEffect } from 'react';
import axios from 'axios';
import "./Vote.css";
import Navigation from "../navigation/Navigation";

const Vote = () => {

    const voterId = useRef("null");
    const [status, setstatus] = useState(null);
    const [value, setvalue] = useState(0);
    const [candidates, setcandidates] = useState(false);

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];


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

                if(validify.response === 202)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 203)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 204)
                    setstatus(<p>{validify.message}</p>)
                else if(validify.response === 200)
                    setstatus(<p>{validify.message}</p>)
            });
            span.onclick = function() {
                modal.style.display = "none";
            }
            modal.style.display = "block";
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                setcandidates(response.data)
                setvalue(1)
            });
    }, []);


    return (
    
        <div className="vote-main-div">

            <Navigation/>

            <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>{status}</p>
            </div>
            </div>

            <form method="post" ref={voterId}>
            <p className="vote-main-heading">Voting Page</p>
            <span className="vote-input-heading">Voter ID :</span><input type="text" name="voterId" id="voterId" className="vote-form-input-text"/>
            <input type="button" value="Vote" onClick={addVote} className="vote-form-input-button"/> <br />
            </form>
            <div className="vote-radio-main-div">
                <div className="vote-sub-heading">Vote for</div>
                {value ? candidates.map((da) => (
                    <div className="vote-radio-button-div">
                        <p style={{display: "inline-block"}}>{da.name}</p>
                        <input type="radio" name="radio" id={da.name} value={da.name} />
                    </div>
                )) : <div><p>Loading...</p></div>}
            </div>
            {status}
        </div>
    );
}


export default Vote;
