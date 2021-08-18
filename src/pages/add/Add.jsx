import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'; 
import "./Add.css";
import Navigation from "../navigation/Navigation";

const Add = () => {
    const candidateData = useRef("null");
    const [candidates, setcandidates] = useState(null);
    const [dataUpdated, setdataUpdated] = useState(0);

    function addMember() {
        const form = candidateData.current
        const data = {
            "name" : form['candidateName'].value,
            "pin" : form['pin'].value
        }
        axios.post('http://127.0.0.1:5000/add', data)
            .then(response => {
                console.log(response.data)
                setdataUpdated(dataUpdated+1)
            });
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                const validify = response.data;
                setcandidates(validify)
    });
    }, [dataUpdated]);

    return (
        <div className="add-main-div">
            <Navigation/>
            <p className="add-main-heading">Add Candidate</p>
            <div>
            <form method="post" ref={candidateData}>
                <input type="text" name="candidateName" id="candidateName" className="add-form-input-text" placeholder="Name of candidate"/>
                <input type="password" name="pin" id="pin" className="add-form-input-pin"/>
                <input type="button" onClick={addMember} name= "Submit" value = "Submit" className="add-form-input-button"/>
            </form>
            </div>
            <div style={{width: "40%", margin: "3% auto"}}>
                <p className="add-sub-heading">List of current candidates</p>
                {candidates && candidates.map((candidate) => (
                    <div>
                        <p className="add-list-data">{candidate.name}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Add;
