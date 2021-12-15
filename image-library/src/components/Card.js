import React from 'react';
import './Card.css';
import logos from '../logos/Logos';

const Card = (props) => {
    const { images } = props

    return (
        <div className='single-card'>
            <figure className='circle'></figure>
            <img className='team-logo' src={logos[1].url} alt='team-logo'/>
            <h2 className='card-title'>{images[1].name}</h2>
        </div>
    )
}

export default Card;
