import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'; 

const Add = () => {
    const candidateData = useRef("null");
    const [candidates, setcandidates] = useState(0);
    const [dataUpdated, setdataUpdated] = useState(0);

    function addMember() {
        const form = candidateData.current
        console.log(candidateData.current)
        const data = {
            "name" : form['candidateName'].value
        }
        axios.post('http://127.0.0.1:5000/add', data)
            .then(response => {
                const validify = response.data;
                console.log(validify)
                setdataUpdated(dataUpdated+1)
            });
    }

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        // const article = { title: 'React Hooks POST Request Example' };
        axios.get('http://127.0.0.1:5000/voteSummary')
            .then(response => {
                const validify = response.data;
                console.log(validify)
                setcandidates(validify)
            });
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
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
