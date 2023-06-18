const DishList = ({ item }) => {
    return (

        <div>
            {item.name} {item.price} {item.ingridients.join(", ")}
        </div>

    );
};
export default DishList;