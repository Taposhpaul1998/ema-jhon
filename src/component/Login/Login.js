import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Glogo from '../../images/google-logo.png'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigete = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handelEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handelPassWordBlur = (event) => {
        setPassword(event.target.value)
    }
    if (user) {
        navigete(from, { replace: true });
    }
    const handelUserLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-conteiner'>
            <div>
                <h2 className='form-title'>Log In</h2>
                <form onSubmit={handelUserLogin}>
                    <div className="input-group">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handelEmailBlur} type="email" name='email' required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handelPassWordBlur} type="password" name='password' required />
                        </div>
                        <p style={{ color: 'red' }}>{error?.message}</p>
                        {
                            loading && <p>Loding...</p>
                        }
                        <button className='form-submit' type="submit">Log In</button>
                    </div>
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
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

export default Login;