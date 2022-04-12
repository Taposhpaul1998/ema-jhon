import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Glogo from '../../images/google-logo.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassWord] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handelEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handelPassWordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handelConfirmPasswordBlur = (event) => {
        setConfirmPassWord(event.target.value)
    }
    if (user) {
        navigate('/')
    }
    const handelCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Place type carect password');
            return;
        }
        setError('');
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-conteiner'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handelCreateUser}>
                    <div className="input-group">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handelEmailBlur} type="email" name='email' required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handelPassWordBlur} type="password" name='password' required />
                        </div>
                        <div>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handelConfirmPasswordBlur} type="password" name='password' required />
                        </div>
                        <p style={{ color: "red" }}>{error}</p>
                        <button className='form-submit' type="submit">Sign Up</button>
                    </div>
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to="/login">Log in</Link>
                </p>
                <div className='form-or'>
                    <div></div>
                    or
                    <div></div>
                </div>
                <div >
                    <button className="input-btn"> <img src={Glogo} alt="" /> Contine with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;