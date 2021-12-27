import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages, fetchFail } from '../actions';
import logos from '../logos/Logos';
import Card from './Card';
import './Cards.css';

const Cards = (props) => {
    const { teams, isFetching, error, getImages } = props;

    useEffect(() => {
        getImages();
    }, [getImages]);

    if(error){
        return <h2>We got an error: {error}</h2>;
    }

    if(isFetching){
        return <h2>Fetching images...</h2>;
    }

    const showCard = () => {
        
    }

    return (
        <div className='card-container'>
            {
                logos.map(card => {
                    return(
                        <div key={card.id} className='single-card' onClick={showCard}>
                            <figure className='circle'></figure>
                            <img className='team-logo' src={card.url} alt='team-logo'/>
                            <h2 className='card-title'>{card.team_name}</h2>
                        </div>
                    )
                })
                
            }
        </div>
        // <div className='card-container'>
            // {/* <Card teams={teams}/>
            // <Card teams={teams}/> */}

            // {
            //     logos.map(logo => {
            //         return <Card key={logo.id} logo={logo}/>
            //     })
            // }
            
            // {/* {
            //     teams.map(team => {
            //         return <Card key={team.id} team={team}/>
            //     })
            // } */}
            
            // {/* {
            //     images.map(image => {
            //         <Card key={image.id} image={image}/>
            //     })
            // } */}
        // </div>
    );
};

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getImages, fetchFail })(Cards);
