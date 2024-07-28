import React, { useState } from 'react'
import { getProductoPorId, getProductos } from '../../../mocks/asyncMock'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useSate()
    const [idProducto, setIdProducto] = useState(1)
    const [mensaje, setMensaje] = useState('')


    useEffect(() => {
        getProductoPorId()
    }, [idProducto])



    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer

