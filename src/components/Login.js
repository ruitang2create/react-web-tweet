import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='container'>
                    <div className='col-2of5 bg-white profile user-auth'>
                        <h3>Log in to Web Tweet</h3>
                        <form id='login-form' action='/login' method='POST'>
                            <input className='input-auth' id='username' type='text' placeholder='Username' name='username' required='' />
                            <input className='input-auth' id='password' type='text' placeholder='Password' name='password' required='' />
                            <button className='btn-primary' id='login-btn' type='submit'>Log in</button>
                        </form>
                        <h6>New to Web Tweet?</h6>
                        <Link to='/signup'>Sign up Now</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;