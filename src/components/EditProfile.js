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
                    <div className='col-2of5 bg-white'>    
                        <form className='profile' action='/profile' method='GET'>
                            <img className='avatar' src={avatar} alt='avatar' />
                            <input className='input-profile' id='name-input' type='text' placeHolder='Jackie Chan' name='name' />
                            <h5>@JChan</h5>
                            <h5 id='username'>JChan</h5>
                            <input className='input-profile' id='location-input' type='text' placeholder='Hongkong' name='location' />
                            <textarea className='input-profile' id='bio-input' name='bio' placeholder='I am a Kungfu actor'/>
                            <button className='btn-primary space-top' id='save-btn' type='submit'>Save</button>
                            <Link className='btn-border space-top' to='/profile'>Cancel</Link>
                        </form>
                    </div>
                    <Tweet />
                </div>
            </div>
        );
    }
}