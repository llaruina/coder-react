import React from 'react';
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {

    return (
        <div>
            <h1>Logo de la tienda</h1>

            <ul>
                <li> Ropa </li>
                <li> Joyas </li>
                <li> Electrónica </li>
            </ul>
            
            <CartWidget />
        </div>
    )

}

export default NavBar;