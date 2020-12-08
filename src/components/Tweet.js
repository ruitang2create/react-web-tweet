import React from 'react';
import avatar from '../assets/avatar.jpg';
import './Tweet.css';

export default class Tweet extends React.Component {
    render() {
        return (
            <div className='col-3of5 bg-white'>
                <div className='tweet'>
                    <form id='tweetForm' action='/tweet' method='POST'>
                        <div class='row'>
                            <img class='avatar-sm v-top' src={avatar} alt='avatar' />
                            <textarea className='input-tweet' placeholder="What's up" name='content' required='' />
                        </div>
                        <p><img id='previewImage' alt=''/></p>
                        <div className='row tweet-actions'>
                            <button className='btn-clear' id='tweetImage' type='button'>
                                <i className='far fa-image' />
                            </button>
                            <button className='btn-primary' type='submit'>Post</button>
                        </div>
                    </form>
                </div>
                <div className='tweet'>
                    <div className='row'>
                        <img className='avatar-sm' src={avatar} alt='avatar' />
                        <h5><b>Jackie Chan</b></h5>
                        <h5>JChan</h5>
                        <h5>November 28, 2020 12:30 AM</h5>
                    </div>
                    <p className='tweetBody'>Stay warm in winter!</p>
                </div>    
            </div>
        );
    }
}