import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContex'
import ItemCount from "../Item/ItemCount"

const CartItem = ({ producto }) => {

  const p = producto

  const { remover, agregar } = useContext(CartContext)


  return (
    <div className='item-card'>
      <h2 >{p.titulo}</h2>
      <img src={p.image} alt="foto del producto" />
      <p>${p.precio}</p>
      <p>Cantidad {p.cantidad} unidades</p>
      <p>Subtotal :  {p.precio * p.cantidad}</p>
      <ItemCount handleAddToCart={agregar} prod={producto} />
      <button onClick={() => remover(p.id)}>eliminar producto</button>
    </div>
  )
}

export default CartItem