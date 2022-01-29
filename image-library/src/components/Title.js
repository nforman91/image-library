import React from 'react';
import './Title.css';
import Cards from './Cards';

const Title = () => {
    return (
        <section className='title-container'>
            <img className='nhl-shield' src="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg" alt="NHL shield logo"/>
            <h2 className='page-title'>NHL Teams</h2>
            <Cards className='cards'/>
        </section>
    )
}

export default Title;
