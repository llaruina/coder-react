import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div>
            <h1>Logo de la tienda</h1>

            <ul>
                <li>
                    <Link to={`/categoria/ropa`}> Ropa </Link>
                </li>
                <li>
                    <Link to={`/categoria/joyas`}> Joyas </Link>
                </li>
                <li>
                    <Link to={`/categoria/electronica`}> Electrónica </Link>
                </li>
            </ul>

            <CartWidget />
        </div>
    )

}

export default NavBar;