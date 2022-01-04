import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages, fetchFail } from '../actions';
import logos from '../logos/Logos';
import Info from './Info';
import './Cards.css';

const Cards = (props) => {
    const { teams, toggleInfo, isFetching, error, getImages } = props;
    const [toggleInfoHere, setToggleInfoHere] = useState(false)

    useEffect(() => {
        getImages();
    }, [getImages]);

    if(error){
        return <h2>We got an error: {error}</h2>;
    }

    if(isFetching){
        return <h2>Fetching images...</h2>;
    }

    const showInfo = () => {
        // e.preventDefault();
        // setToggleInfoHere({
        //     toggleInfoHere: !toggleInfoHere
        // })
        // console.log('TOGGLEINFOHERE', toggleInfoHere)
        document.getElementById('modal').classList.toggle('show-info');
    }

    return (
        <div>
            <div className='card-container'>
                {
                    logos.map((card, id) => {
                        return(
                            <div>
                                <div key={id} className='single-card' onClick={showInfo}>
                                    <figure className='circle'></figure>
                                    <img className='team-logo' src={card.url} alt='team-logo'/>
                                    <h2 className='card-title'>{card.team_name}</h2>
                                </div>
                                <div id='modal' className='show-info'>
                                    <h4>{`Team Name: ${card.team_name}`}</h4>
                                    <h4>{`Conference: ${card.conference}`}</h4>
                                    <h4>{`Division: ${card.division}`}</h4>
                                </div>
                            </div>
                        )
                    })
                }
                
                {/* <Info className='show-info' id='modal' logos={logos}/> */}
                {/* {
                    toggleInfoHere && <Info className='show-info' id='modal' logos={logos}/>
                } */}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        toggleInfo: state.toggleInfo,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getImages, fetchFail })(Cards);
