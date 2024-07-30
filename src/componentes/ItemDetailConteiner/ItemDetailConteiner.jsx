import React, { useEffect, useState } from 'react'
import { getProductoPorId, getProductos } from '../../../mocks/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [mensaje, setMensaje] = useState('')

    const {id} = useParams()

    useEffect(() => {
        getProductoPorId(id).then(res => setProducto(res)).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <h1> Cargando ... </h1>
        )
    }


    return (
        <div>

            producto &&
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer

