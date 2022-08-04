import React from 'react';
import empty_star from '../logos/empty_star.png';
import full_star from '../logos/full_star.png';

const Star = (props) => {
    const {star, setStar} = props;

    return(
        <img className="star" src={empty_star} alt="Star for favorite team"/>
    )
};

export default Star;
