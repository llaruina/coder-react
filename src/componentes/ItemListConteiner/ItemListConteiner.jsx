import React, { useEffect, useState } from 'react'
import { getProductos } from '../../../mocks/asyncMock.js'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'



const ItemListConteiner = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const { cat } = useParams()

    useEffect(() => {

        if (cat) {
            getProductos().then(res => setProductos(res.filter(e => e.categoria === cat))).finally(setLoading(false))
        } else {
            getProductos().then(res => setProductos(res)).finally(setLoading(false))
        }
    }, [cat])

    if (loading) {
        return (
            <h2> Cargando .... </h2>
        )
    }

    if (error) {
        return (
            <h2>{error}</h2>
        )
    }

    return (
        <div>
            {
                productos.length > 0 &&
                <ItemList productos={productos} />
            }
        </div>
    )

}

export default ItemListConteiner