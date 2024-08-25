import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { db } from "../../services/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [mensaje, setMensaje] = useState('')

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const productoDeFB = doc(db, "productos", id)

        getDoc(productoDeFB).then(res => {
            const dataProducto = res.data()
            const productoFinal = { ...dataProducto, id: res.id }
            setProducto(productoFinal)
        }).finally(setLoading(false))

    }, [])


    if (loading) {
        return (
            <h1> Cargando ... </h1>
        )
    }


    return (
        <div>
            {
                producto &&
                <ItemDetail producto={producto} />
            }
        </div>
    )
}

export default ItemDetailContainer

