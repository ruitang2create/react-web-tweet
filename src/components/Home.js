import React from 'react';
import Nav from './Nav';
import Tweet from './Tweet';
import avatar from '../assets/avatar.jpg';
import './Home.css';

class Home extends React.Component {
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
                    </div>
                    <Tweet />
                </div>
            </div>
        );
    }
}

export default Home;