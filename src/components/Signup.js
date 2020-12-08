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
                        <h3>Sign up an account</h3>
                        <form id='signup-form' action='/signup' method='POST'>
                            <input className='input-auth' id='username' type='text' placeholder='Username' name='username' required='' />
                            <input className='input-auth' id='password' type='text' placeholder='Password' name='password' required='' />
                            <input className='input-auth' id='confirmPassword' type="password" placeholder="Repeat password" name="confirmPassword" required="" />
                            <button className='btn-primary' id='login-btn' type='submit'>Sign up</button>
                        </form>
                        <h6>Have an account?</h6>
                        <Link to='/login'>Log in</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;