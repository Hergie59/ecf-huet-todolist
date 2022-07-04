import React from 'react';
import { FaPlusSquare, FaListAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <footer className="d-flex justify-content-between bg-secondary p-3">
            <div className="btn-group">
                <NavLink to={"/"} className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
                <NavLink to={"/add-task"} className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
            </div>
        </footer>
    ) 
}

export default NavBar;