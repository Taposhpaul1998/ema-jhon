import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCard';
import useProducts from '../Hooks/useProduct';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useCart(products);

    const hendelAddCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-conteiner'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        hendelAddCart={hendelAddCart}
                    ></Product>)
                }
            </div>
            <div className="cart-conteiner">
                <Cart
                    cart={cart}
                >
                    <Link to="/order"> <button className='Checkout-btn'>Reverw order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;