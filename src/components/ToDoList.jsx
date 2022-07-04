import React from "react";
import { FaCheckSquare, FaTrashAlt } from 'react-icons/fa';

class ToDoList extends React.Component{
    render(){
        return(
            <>
            <h1 className="m-3">Liste de tâches</h1>
            <div>
                <ol className="m-3">
                    <li className="m-3">
                        Pression des pneus
                        <button className="m-3"><FaCheckSquare /></button>
                        <button className="m-3"><FaTrashAlt /></button>
                    </li>
                    <li className="m-3">
                        Graissage de chaîne
                        <button className="m-3"><FaCheckSquare/></button>
                        <button className="m-3"><FaTrashAlt /></button>
                    </li>
                    <li className="m-3">
                        Vidange
                        <button className="m-3"><FaCheckSquare/></button>
                        <button className="m-3"><FaTrashAlt /></button>
                    </li>
                    <li className="m-3">
                        Ranger le garage
                        <button className="m-3"><FaCheckSquare/></button>
                        <button className="m-3"><FaTrashAlt /></button>
                    </li>
                </ol>
            </div>
            </>
        )
    }
}

export default ToDoList;