import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'; 

const Add = () => {
    const candidateData = useRef("null");

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
            });
    }

    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     // const article = { title: 'React Hooks POST Request Example' };
    //     const data = "user"
    //     axios.post('http://127.0.0.1:5000/add', data)
    //         .then(response => {
    //             const validify = response.data;
    //             console.log(validify)
    //         });
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    return (
        <div>
            <h1>This is Add file</h1>
            <form method="post" ref={candidateData}>
                <input type="text" name="candidateName" id="candidateName"/>
                <input type="button" onClick={addMember} name= "Submit" value = "Submit"/>
            </form>
        </div>
    );
}

export default Add;
