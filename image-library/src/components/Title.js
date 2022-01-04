import React from 'react';
import './Title.css';
import Cards from './Cards';

const Title = () => {
    return (
        <section className='title-container'>
            <h2 className='page-title'>NHL Teams</h2>
            <Cards className='cards'/>
        </section>
    )
}

export default Title;
