import React from 'react';
import './Cart.css'

const Cart = ({ cart, children }) => {
    let totle = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        totle = totle + product.price * product.quantity
        shipping = shipping + product.shipping

    }

    const tex = parseFloat(totle * 0.1);
    const grendTotle = totle + shipping + tex;
    return (
        <div className='cart-info'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Totle price: ${totle}</p>
            <p>Totle Shipping: ${shipping}</p>
            <p>Tex: ${tex.toFixed(2)}</p>
            <h5>Grand Totle: ${grendTotle.toFixed(2)}</h5>
            {children}
        </div>
    );
};

export default Cart;