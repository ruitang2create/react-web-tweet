import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/webdxd.png';
import avatar from '../assets/avatar.jpg';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav className='nav-bar'>
                <div className='container nav-container'>
                    <ul>
                        <li>
                            <Link to='/'>
                                <img className='logo' src={logo} alt='avatar' />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                    <div>
                        <Link to='/profile'>
                            <img className='avatar-sm' src={avatar} alt='avatar' />
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;