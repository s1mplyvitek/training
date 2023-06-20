import MenuCard from "../MenuCard";

const Menu = () => {

    let menu = [

        {
            id: 1,
            name: 'Buuzas',
            price: 70,
            expense: 0,
            ingridients: ['meat', 'water', 'solt', 'onion', 'dough',],
            image: "/content/face.png",
        },

        {
            id: 2,
            name: 'Shulen',
            price: 100,
            expense: 0,
            ingridients: ['meat', 'water', 'solt',],
            image: "/content/face.png",
        },

        {
            id: 3,
            name: 'Brtuch',
            price: 150,
            expense: 0,
            ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
            image: "/content/face.png",
        },

        {
            id: 4,
            name: 'Classic salad',
            price: 60,
            expense: 0,
            ingridients: ['salad', 'onion', 'solt', 'cucmber', 'tomato'],
            image: "/content/face.png",
        },

        {
            id: 5,
            name: 'Cofee',
            price: 50,
            expense: 0,
            ingridients: ['water', 'sugar', 'coffee'],
            image: "/content/face.png",
        },

        {
            id: 6,
            name: 'Tea',
            price: 40,
            expense: 0,
            ingridients: ['tea', 'water', 'milk'],
            image: "/content/face.png",
        },
    ];


    return (<div className="grid grid-cols-4 container mx-auto gap-3">
        {menu.map((item) => <MenuCard item={item} />)}
    </div>)
}

export default Menu;