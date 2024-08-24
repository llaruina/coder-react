import React, {useContext} from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../Context/CartContex"

const CartWidget = () => {
 
    const {cart, itemCant} = useContext(CartContext)

    return (
        <>
            <div>      
                <span> <FaShoppingCart /> </span>
                <span> {itemCant()} </span>

            </div>

        </>
    )

}

export default CartWidget