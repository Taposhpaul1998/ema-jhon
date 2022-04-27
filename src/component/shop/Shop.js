import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCard';
import useProducts from '../Hooks/useProduct';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useCart(products);
    const [pageCount, setPageCount]=useState(0);
    const [pages, setPages]=useState(0);
    const [size, setSize] = useState(10);


    useEffect(() => {
       
        fetch(`http://localhost:5000/product?page=${pages}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res=>res.json())
        .then(data=>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    },[])

    const hendelAddCart = (selectedProduct) => {
        const exists = cart.find(product => product._id === selectedProduct._id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className='shop-conteiner'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        hendelAddCart={hendelAddCart}
                    ></Product>)
                }
                <div className='paginason'>
                    {
                        [...Array(pageCount).keys()].map(number=><button
                        className={pages === number ? 'selected': ''}
                        onClick={()=>setPages(number)}>{number+1}</button>)
                    }
                    <select className='select' onChange={e=> setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
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