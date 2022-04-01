import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCard';
import useProducts from '../Hooks/useProduct';
import OrderProduct from '../orderProduct/OrderProduct';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const hendelRemoveProduct = product => {
        const rest = cart.filter(item => item.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-conteiner'>
            <div className="order-products">
                {
                    cart.map(product => <OrderProduct
                        key={product.id}
                        product={product}
                        hendelRemoveProduct={hendelRemoveProduct}
                    ></OrderProduct>)
                }
            </div>
            <div className="cart-conteiner orderCart">
                <Cart
                    cart={cart}
                > <Link to="/inventory"> <button className='Checkout-btn'>Proced Checkout <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link></Cart>
            </div>
        </div>
    );
};

export default Order;