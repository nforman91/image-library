import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className='single-card'>
            <img className='picsum-image' src='https://picsum.photos/200' alt='random thing'/>
            <h2 className='card-title'>Example Card Title</h2>
        </div>
    )
}

export default Card;
