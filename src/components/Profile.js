import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Tweet from './Tweet';
import avatar from '../assets/avatar.jpg';
import './Profile.css';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className='container'>
                    <div className='col-2of5 bg-white profile'>
                        <img className='avatar' src={avatar} alt='avatar' />
                        <h4>Jackie Chan</h4>
                        <h5>@JChan</h5>
                        <h4><i className='fas fas-map-marker-alt'>Hongkong</i></h4>
                        <p className='center'>I'm a Kungfu actor.</p>
                        <Link className='btn-border space-top' to='/editProfile'>Edit profile</Link>
                        <Link className='btn-border space-top' to='/login'>Log out</Link>
                    </div>
                    <Tweet />
                </div>
            </div>
        );
    }
}