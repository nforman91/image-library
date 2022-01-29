import React, { useState, useEffect } from 'react';
import './Modal.css';
import axios from 'axios';

const Modal = (props) => {
    const {team} = props
    const [selectedTeamCard, setselectedTeamCard] = useState(null);

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
                    <h4>Stadium: {selectedTeamCard.venue.name}</h4>
                </div>
            </div>
    }
    </>
    )
}

export default Modal;
