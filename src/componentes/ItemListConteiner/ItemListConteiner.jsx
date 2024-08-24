import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig.jsx'
import { collection, getDocs } from 'firebase/firestore'



const ItemListConteiner = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const { cat } = useParams()

    useEffect(() => {

        setLoading(true)

        const productosObtenidos = cat ? query(collection(db, "productos"), where('category', '==', cat)) : collection(db, "productos")

        console.log(productosObtenidos)

        getDocs(productosObtenidos).then(snapshot => {
            const dataProductos = snapshot.docs.map(doc => {
                const conId = doc.data()
                return { id: doc.id, ...conId }
            })
            setProductos(dataProductos)
        }).finally(() => setLoading(false))


        /*
                if (cat) {
                    const productosPorCat = query(collection(db, "productos"), where('category', '==', cat))
                    getDocs(productosPorCat).then(snapshot => {
                        const dataProductos = snapshot.docs.map(doc => {
                            const conId = doc.data()
                            return { id: doc.id, ...conId }
                        })
                        setProductos(dataProductos)
                    }).finally(() => setLoading(false))
                } else {
                    const productosRef = collection(db, "productos")
                    getDocs(productosRef).then(snapshot => {
                        const dataProductos = snapshot.docs.map(doc => {
                            const conId = doc.data()
                            return { id: doc.id, ...conId }
                        })
                        setProductos(dataProductos)
                    }).finally(() => setLoading(false))
                }
        */
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