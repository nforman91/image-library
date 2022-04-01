import React, { useState, useEffect } from 'react';
import './Modal.css';
import axios from 'axios';
// import Star from './Star';
// import empty_star from '../logos/empty_star.png';
// import full_star from '../logos/full_star.png';

const Modal = (props) => {
    const {team} = props
    const [selectedTeamCard, setselectedTeamCard] = useState(null);
    // const [star, setStar] = useState(false)

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}`)
        .then(res => {
            setselectedTeamCard(res.data.teams[0])
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return(
        <>
        {selectedTeamCard && 
            <div id='modal'>
                <div 
                    className="exit" 
                    onClick={() => props.setModal(false)}
                >X</div>
                <div className="modal-content">
                    <h4 style={{fontWeight: 'bold'}}>Team Name: {selectedTeamCard.name}</h4><br/>
                    <h4>Conference: {selectedTeamCard.conference.name}</h4><br/>
                    <h4>Division: {selectedTeamCard.division.name}</h4><br/>
                    <h4>City: {selectedTeamCard.venue.city}</h4><br/>
                    <h4>Stadium: {selectedTeamCard.venue.name}</h4><br/>
                    <a href={selectedTeamCard.officialSiteUrl} target="_blank">Official Site</a>
                    {/* <h4 onClick={() => setStar(!star)}>Favorite?</h4>
                    {star && <Star star={star} setStar={setStar}/>} */}
                    {/* <h6>{star}</h6>
                    <img className="star" src={star} alt="Star for favorite team" onClick={() => setStar(!star)}/> */}
                </div>
            </div>
    }
    </>
    )
}

export default Modal;
