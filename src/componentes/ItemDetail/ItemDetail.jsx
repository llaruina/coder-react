import React, { useContext, useState } from 'react'
import ItemCount from '../Item/ItemCount'
import { CartContext } from '../../Context/CartContex'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ producto }) => {

    const { agregar, estaEnCarrito, handleAddToCart } = useContext(CartContext)

    const { titulo, imagen, precio, descripcion, id } = producto

    return (
        <div>

            <h2>{titulo} </h2>
            <img src={imagen} alt="foto del producto" />
            <p> {descripcion}</p>
            <p>${precio}</p>
            {
                
                estaEnCarrito({ id }) ?
                    <Link to='/cart'>Ir Al Carrito</Link>
                    :
                    <ItemCount handleAddToCart={agregar} prod={producto} />
            }
        </div>
    )
}