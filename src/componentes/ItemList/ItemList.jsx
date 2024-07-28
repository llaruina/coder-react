import Item from '../Item/Item.jsx'


const ItemList = ({ productos }) => {

    return (
        <div>
            {productos.map((e) => {
                return (
                    <Item key={e.id} e={e} />
                )
            })}

        </div>
    )
}

export default ItemList