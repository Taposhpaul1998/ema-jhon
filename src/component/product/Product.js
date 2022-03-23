import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ hendelAddCart, product }) => {
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Seller: {seller}</p>
                <p>Rating: <small>{ratings} </small>Star</p>
            </div>
            <button onClick={() => hendelAddCart(product)} className='card-btn'><p className='cart-title'>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;