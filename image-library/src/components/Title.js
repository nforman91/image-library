import React from 'react';
import './Title.css';
import Cards from './Cards';

const Title = () => {
    return (
        <section className='title-container'>
            <img className='nhl-shield' src="https://media.d3.nhle.com/image/private/t_q-best/prd/assets/nhl/logos/nhl_shield_wm_on_dark_fqkbph" alt="NHL shield logo"/>
            <h2 className='page-title'>NHL Teams</h2>
            <Cards className='cards'/>
        </section>
    )
}

export default Title;
