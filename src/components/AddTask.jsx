import React from "react";
import { FaPlusSquare } from 'react-icons/fa';

class AddTask extends React.Component{
    render(){
        return(
            <>
            <h3>Nouvelle tâche</h3>
            <div>
                <input type="text" placeholder="Add newTask"/>
                <button><FaPlusSquare /></button>
            </div>
            </>
        )
    }
}

export default AddTask;