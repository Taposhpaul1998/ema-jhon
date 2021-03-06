import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCard';
import OrderProduct from '../orderProduct/OrderProduct';
import './Order.css'

const Order = () => {
    const [cart, setCart] = useCart();
    const hendelRemoveProduct = product => {
        const rest = cart.filter(item => item._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }
    return (
        <div className='shop-conteiner'>
            <div className="order-products">
                {
                    cart.map(product => <OrderProduct
                        key={product._id}
                        product={product}
                        hendelRemoveProduct={hendelRemoveProduct}
                    ></OrderProduct>)
                }
            </div>
            <div className="cart-conteiner orderCart">
                <Cart
                    cart={cart}
                > <Link to="/shipment"> <button className='Checkout-btn'>Proced Shipment <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link></Cart>
            </div>
        </div>
    );
};

export default Order;