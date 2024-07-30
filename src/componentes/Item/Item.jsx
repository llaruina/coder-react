import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ e }) => {
    return (
        <div>
            <h2>{e.titulo} </h2>
            <img src={e.imagen} alt="foto del producto" />
            <p>${e.precio}</p>
            <Link to={`/detalle/${e.id}`}>Ver detalle </Link>
        </div>
    )

}

export default Item