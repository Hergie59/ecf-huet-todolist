import React, { useState } from "react";
import { FaPlusSquare } from 'react-icons/fa';


function AddTask() {
    const [tasks, setTask ] = useState([]);
    const [valeurText, setValeurText] = useState("");
    const task = { id: Math.floor(Math.random() * 1000), name: valeurText };
    
    function handleChange(e){
        setValeurText(e.target.value);
        e.preventDefault();    
    }

    function handleClick(){
        setTask((prevState) => [...prevState, task]);
    }

    return(
        <>
        <h3>Nouvelle tâche</h3>
        <div>
            <ul>
            {tasks.map((task) => (
                <li>{task}</li>
            ))}
            </ul>
        </div>
        <div>
            <input type="text" placeholder="Add newTask" value={valeurText} onChange={handleChange}/>
            <button onClick={handleClick}><FaPlusSquare /></button>
        </div>
        </>
    );  
}

export default AddTask;