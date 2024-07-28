import react from 'react'

const Item = ({e}) => {
    return (
        <div>
            <h2>{e.titulo} </h2>
            <img src={e.imagen} alt ="foto del producto" />
            <p>${e.precio}</p>
            <button>Ver detalles</button>
        </div>
    )

}

export default Item