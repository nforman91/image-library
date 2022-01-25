import React, { useState } from 'react';
import Info from './Info';
import logos from '../logos/Logos';
import './Cards.css';

const Cards = () => {
    const [teamCards, setTeamCards] = useState(logos);

    const showSortBy = () => {
        document.getElementById('dropdown-content').classList.toggle('show-sorting');
    }

    const sortByTeamName = (e) => {
        e.preventDefault();
        setTeamCards(
            logos.sort(function(a,b) {
                let aTeamName = a.name.toLowerCase();
                let bTeamName = b.name.toLowerCase();
                if(aTeamName > bTeamName){
                    return 1;
                } else if(aTeamName < bTeamName){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
        document.getElementById('dropdown-content').classList.toggle('show-sorting');
    }

    const sortByDivision = (e) => {
        e.preventDefault();
        setTeamCards(
            logos.sort(function(a,b) {
                let aDivision = a.division.name.toLowerCase();
                let bDivision = b.division.name.toLowerCase();
                if(aDivision > bDivision){
                    return 1;
                } else if(aDivision < bDivision){
                    return -1;
                } else {
                    return 0;
                }
            })
        )
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
