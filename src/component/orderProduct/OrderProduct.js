import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Order-Product.css'

const OrderProduct = ({ product, hendelRemoveProduct }) => {
    const { img, name, price, quantity, shipping } = product
    return (
        <div className='my-orders'>
            <div className='product-detales'>
                <img src={img} alt="" />
                <div className='order-info'>
                    <h4>{name}</h4>
                    <p>Quantity: <small>{quantity}</small></p>
                    <p>price:<small> ${price}</small></p>
                    <p>Shipping:<small> ${shipping}</small></p>
                </div>
            </div>
            <div className="delet-btn">
                <button onClick={() => hendelRemoveProduct(product)}> <FontAwesomeIcon icon={faTrashAlt} ></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default OrderProduct;