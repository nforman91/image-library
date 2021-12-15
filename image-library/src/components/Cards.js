import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages, fetchFail } from '../actions';
import Card from './Card';
import './Cards.css';

const Cards = (props) => {
    const { images, isFetching, error, getImages } = props;

    useEffect(() => {
        getImages();
    }, [getImages]);

    if(error){
        return <h2>We got an error: {error}</h2>;
    }

    if(isFetching){
        return <h2>Fetching images...</h2>;
    }

    return (
        <div className='card-container'>
            <Card images={images}/>
            <Card images={images}/>
            {/* {
                images.map(image => {
                    <Card key={image.id} image={image}/>
                })
            } */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        images: state.images,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getImages, fetchFail })(Cards);
