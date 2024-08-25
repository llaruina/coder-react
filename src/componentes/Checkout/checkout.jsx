import React, { useContext, useState } from 'react'
import { db } from "../../services/firebaseConfig"
import { addDoc, collection, or } from 'firebase/firestore'

import { CartContext } from '../../Context/CartContex'

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [dir, setDir] = useState("")


    const [orden, setOrden] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)


    const { cart, setCart } = useContext(CartContext)


    const formatOrder = {
        cart: cart,
        nombre: nombre,
        mail,
        dir
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        console.log("Se envió la orden, datos: ", nombre, mail, dir)
        const ordenRef = collection(db, "ordenes")
        const orderId = await addDoc(ordenRef, formatOrder)
        setCart([])
        setOrden(orderId.id)
        setIsSubmitting(false)
        console.log("La orden es: " + orderId.id)
    }



    if (orden) {
        return (
            <h3>Gracias por su compra! El id de su orden es : {orden}</h3>
        )
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Nombre: </p>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
                <p>Mail: </p>
                <input type="text" onChange={(e) => setMail(e.target.value)} />
                <p>Dirección: </p>
                <input type="text" onChange={(e) => setDir(e.target.value)} />
                <button type='submit'>{isSubmitting ? "Cargando..." : "Confirmar compra"}</button>
            </form>
        </div>
    )
}

export default Checkout