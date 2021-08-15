import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'; 

const Add = () => {
    const candidateData = useRef("null");
    const [candidates, setcandidates] = useState(null);
    const [dataUpdated, setdataUpdated] = useState(0);

    function addMember() {
        const form = candidateData.current
        const data = {
            "name" : form['candidateName'].value
        }
        axios.post('http://127.0.0.1:5000/add', data)
            .then(response => {
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
        <div>
            <h1>This is Add file</h1>
            <form method="post" ref={candidateData}>
                <input type="text" name="candidateName" id="candidateName"/>
                <input type="button" onClick={addMember} name= "Submit" value = "Submit"/>
            </form>
            <div>
                {candidates && candidates.map((candidate) => (
                    <div>
                        <h2>{candidate.name}</h2>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Add;
