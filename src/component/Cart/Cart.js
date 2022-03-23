import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart-info'>
            <h4>Order summary</h4>
            <p>Selected Items:{cart.length}</p>
        </div>
    );
};

export default Cart;