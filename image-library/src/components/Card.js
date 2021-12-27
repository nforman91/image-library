import React from 'react';
import './Card.css';
import logos from '../logos/Logos';

const Card = (props) => {
    const { teams } = props

    return (
        <div className='info-card'>
            <h2>Team Name: {teams.name}</h2>
        </div>
    )

    // return (
    //     <div className='single-card'>
    //         <figure className='circle'></figure>
    //         <img className='team-logo' src={logos[31].url} alt='team-logo'/>
    //         <h2 className='card-title'>{logos[31].team_name}</h2>
    //     </div>
    // )
}

export default Card;
