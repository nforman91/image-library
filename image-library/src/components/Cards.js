import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './Info';
import './Cards.css';

const Cards = () => {
    const [teamCards, setTeamCards] = useState(null);

    useEffect(() => {
        axios.get('https://statsapi.web.nhl.com/api/v1/teams/')
        .then(res => {
            const teams = res.data.teams
            setTeamCards(teams)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const showSortBy = () => {
        document.getElementById('dropdown-content').classList.toggle('show-sorting');
    }

    const sortByTeamName = (e) => {
        e.preventDefault();
        this.setState({
            teamCards: teamCards.sort(function(a,b) {
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
        })
        document.getElementById('dropdown-content').classList.toggle('show-sorting');
    }

    const sortByDivision = (e) => {
        e.preventDefault();
        this.setState({
            teamCards: teamCards.sort(function(a,b) {
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
        })
        document.getElementById('dropdown-content').classList.toggle('show-sorting');
    }

    return (
        <div>
            <button className='sort-button' onClick={showSortBy}>Sort By
                <div id='dropdown-content' className='dd-content show-sorting'>
                    <a href='#teamName' onClick={sortByTeamName}>Team Name</a>
                    <br/>
                    <a href='#division' onClick={sortByDivision}>Division</a>
                </div>
            </button>
            {teamCards && 
                <Info teamCards={teamCards}/>
            }
        </div>
    );
};

export default Cards;
