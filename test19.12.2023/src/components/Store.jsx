import {Delivery} from "./Delivery.jsx";

export function Store({shop_name, price, shopURL, delivery}) {
    return (
        <div className={"flex store"}>
            <div>
                <h4>{shop_name}</h4>
                <p>
                    <Delivery delivery={delivery}/>
                </p>
            </div>
            <a href={shopURL} className={"price"}>{price}kč</a>
        </div>
    )
}