import react from 'react'

const ItemDetail = ({ producto }) => {

    return (
        <div>

            <h2>{producto.titulo} </h2>
            <img src={producto.imagen} alt="foto del producto" />
            <p> {producto.descripcion}</p>
            <p>${producto.precio}</p>
        </div>
    )
}

export default ItemDetail