import {Store} from "./Store.jsx";

let shops = [
    {
        "shop_name": "Smith-Brown",
        "price": 76.73,
        "shopUrl": "https://petty.net/",
        "delivery": 40
    },
    {
        "shop_name": "Parks-Williams",
        "price": 33.87,
        "shopUrl": "http://fisher.com/",
        "delivery": 40
    },
    {
        "shop_name": "Cook-Cline",
        "price": 76.93,
        "shopUrl": "https://www.ferrell.com/",
        "delivery": 0
    },
    {
        "shop_name": "Brown, Jennings and Yoder",
        "price": 19.22,
        "shopUrl": "https://www.allison-todd.com/",
        "delivery": 0
    },
    {
        "shop_name": "Rice LLC",
        "price": 20.42,
        "shopUrl": "https://curry.com/",
        "delivery": 0
    },
    {
        "shop_name": "Burke Group",
        "price": 63.06,
        "shopUrl": "https://parker.com/",
        "delivery": 0
    },
    {
        "shop_name": "Murphy Inc",
        "price": 76.61,
        "shopUrl": "https://www.montgomery.org/",
        "delivery": 0
    },
    {
        "shop_name": "Lopez-Edwards",
        "price": 99.54,
        "shopUrl": "http://www.morse.com/",
        "delivery": 0
    },
    {
        "shop_name": "Salas, Harris and Martin",
        "price": 22.73,
        "shopUrl": "https://holder.com/",
        "delivery": 0
    },
    {
        "shop_name": "Andrews and Sons",
        "price": 71.53,
        "shopUrl": "https://www.anderson-morales.com/",
        "delivery": 40
    }
]

export function ProductInfo() {
    return (
        <div>
            <h2>
                Playstation 5
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aspernatur aut cumque delectus
                deleniti deserunt dolor dolores eius, eligendi est expedita fuga fugiat illum iure labore magnam maxime
                minus mollitia necessitatibus
            </p>

            <h3>
                Offers
            </h3>

            {shops.map((shop) => (
                <Store shop_name={shop.shop_name} price={shop.price} shopURL={shop.shopUrl} delivery={shop.delivery}/>
            ))}


        </div>
    )
}