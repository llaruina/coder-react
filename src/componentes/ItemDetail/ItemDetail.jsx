import react from 'react'

export const ItemDetail = ({ e }) => {

    const ItemDetail = ({ e }) => {
        return (
            <div>
                <h2>{e.titulo} </h2>
                <img src={e.imagen} alt="foto del producto" />
                <p> {e.descripcion}</p>
                <p>${e.precio}</p>
            </div>
        )
    }

}

export default ItemDetail