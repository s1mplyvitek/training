const MenuCard = ({ item }) => {
    let ingridients = item.ingridients.join(", ");

    return (
        <div className="overflow-hidden rounded shadow-lg">
            <img src={item.image} className=" w-full"></img>
            <div className="p-2 ">
                <div className="text-3xl">{item.name}</div>
                <div>{ingridients}</div>
                <button
                    onClick={() => console.log(item)}
                    className="w-full p-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                    Take me
                </button>
            </div>
        </div>

    )
}

export default MenuCard;