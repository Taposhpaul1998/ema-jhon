import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handelNameBlur = (e) => {
        setName(e.target.value);
    }
    const handelAddressBlur = (e) => {
        setAddress(e.target.value);
    }
    const handelPhoneBlur = (e) => {
        setPhone(e.target.value);
    }
    const handelCustomerInfo = (e) => {
        e.preventDefault();
        console.log(name, address, phone);
    }
    return (
        <div className='form-conteiner'>
            <div>
                <h2>Shiping form</h2>
                <form onSubmit={handelCustomerInfo}>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input onBlur={handelNameBlur} type="text" name='name' required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" name='email' required />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handelAddressBlur} type="text" name='address' required />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input onBlur={handelPhoneBlur} type="text" name='phone' required />
                        </div>
                        <button className='form-submit' type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipment;