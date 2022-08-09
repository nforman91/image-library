import React, { useState } from 'react';
import './Info.css';
import Modal from './Modal';

const Info = (props) => {
    const { teamCards, setTeamCards } = props;

    const [team, setTeam] = useState();
    const [sortDrop, setSortDrop] = useState(false);
    const [modal, setModal] = useState(false);

    const sortByTeamName = (e) => {
        e.preventDefault();
        setTeamCards(
            teamCards.sort(function(a,b) {
                let aTeamName = a.team_name.toLowerCase();
                let bTeamName = b.team_name.toLowerCase();
                if(aTeamName > bTeamName){
                    return 1;
                } else if(aTeamName < bTeamName){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
        setSortDrop(false)
    }

    const sortByConference = (e) => {
        e.preventDefault();
        setTeamCards(
            teamCards.sort(function(a,b) {
                let aConference = a.conference.toLowerCase();
                let bConference = b.conference.toLowerCase();
                if(aConference > bConference){
                    return 1;
                } else if(aConference < bConference){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
        setSortDrop(false)
    }

    const sortByDivision = (e) => {
        e.preventDefault();
        setTeamCards(
            teamCards.sort(function(a,b) {
                let aDivision = a.division.toLowerCase();
                let bDivision = b.division.toLowerCase();
                if(aDivision > bDivision){
                    return 1;
                } else if(aDivision < bDivision){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
        setSortDrop(false)
    }

    const showTeamCard = (logo) => {
        return(
            <div onClick={() => {
                setTeam(logo)
                setModal(!modal)
                setSortDrop(false)
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
            <div className="dropdown-container">
                <button className='sort-button' onClick={() => setSortDrop(!sortDrop)}>Sort By</button>
                {sortDrop &&
                <div className='dd-content'>
                    <div onClick={sortByTeamName}>Team Name</div>
                    <div className="sort-line"></div>
                    <div onClick={sortByConference}>Conference</div>
                    <div className="sort-line"></div>
                    <div onClick={sortByDivision}>Division</div>
                </div>
                }
            </div>
            <div className='card-container'>
                <div className="team-modal">
                    {modal && <Modal team={team} setModal={setModal}/>}
                </div>
                <div className='logo-container'>
                    {
                        teamCards.map(logo => {
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
