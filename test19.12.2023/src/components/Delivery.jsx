export function Delivery({delivery}){
    if (delivery === 0){
        return (
            <>
                Free delivery
            </>
        )
    } else {
        return (
            <>
                {delivery} dní
            </>
        )
    }
}