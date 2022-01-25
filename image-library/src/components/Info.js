import React, { useState } from 'react';
import './Info.css';
import logos from '../logos/Logos';
import Modal from './Modal';

const Info = (props) => {
    const [team, setTeam] = useState();
    const [modal, setModal] = useState(false);

    const showTeamCard = (logo) => {
        return(
            <div onClick={() => {
                setTeam(logo)
                setModal(!modal)
            }}
                className="single-logo-container" key={logo.id}>
                <div className='circle'></div>
                <img className="team-logo" src={logo.url} alt="team-logo"/>
            <div className="team-name">{logo.team_name}</div>
            </div>
        )
    }

    return(
        <div className='hockey-app'>
            <div className='card-container'>
                <div className="team-modal">
                    {modal && <Modal team={team} setModal={setModal}/>}
                </div>
                <div className='logo-container'>
                    {
                        logos.map(logo => {
                            return(
                                showTeamCard(logo)
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Info;
