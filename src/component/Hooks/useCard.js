import { useEffect, useState } from "react"
import { getCart } from "../../utilities/fakedb";


const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        fetch('http://localhost:5000/productsByKeys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products =>{
            console.log(products);
        for (const id in storedCart) {
            const addedProduct = products.find(products => products._id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        })
       
    }, [])
    return [cart, setCart];
}
export default useCart;
