import React, { useContext } from 'react'
import { CartContext } from "../../Context/CartContex"
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)

    console.log(cart)

    if (cart.length === 0) {
        return (
            <div>
                <h3>El carrito está vacío</h3>
                <Link to='/'> Volver al inicio</Link>
            </div>
        )
    }

    return (
        <>
            {cart.length > 0 &&
                cart.map(e => {
                    return (
                        <CartItem key={e.id} producto={e} />
                    )
                })
            }
            <button onClick={() => setCart([])}>Vaciar carrito</button>
            <Link to='/checkout'>Finalizar Compra</Link>
        </>
    )
}

export default Cart