import React, { useEffect, useState } from 'react'
import { getProductoPorId, getProductos } from '../../../mocks/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [idProducto, setIdProducto] = useState(1)
    const [mensaje, setMensaje] = useState('')


    useEffect(() => {
        getProductoPorId(1).then(res => setProducto(res)).finally(() => setLoading(false))
    }, [idProducto])

    if (loading) {
        return (
            <h1> Cargando ... </h1>
        )
    }


    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer

