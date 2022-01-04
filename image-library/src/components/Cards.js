import React from 'react';
import logos from '../logos/Logos';
import Info from './Info';
import './Cards.css';

class Cards extends React.Component {
    state = {
        teamCards: logos
    }

    showInfo = () => {
        document.getElementById('modal').classList.toggle('show-info');
    }

    showSortBy = () => {
        document.getElementById('dropdown-content').classList.toggle('show-info');
    }

    sortByTeamName = (e) => {
        e.preventDefault();
        this.setState({
            teamCards: logos.sort(function(a,b) {
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
        document.getElementById('dropdown-content').classList.toggle('show-info');
    }

    sortByDivision = (e) => {
        e.preventDefault();
        this.setState({
            teamCards: logos.sort(function(a,b) {
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
        document.getElementById('dropdown-content').classList.toggle('show-info');
    }

    render(){
        return (
            <div>
                <button className='sort-button' onClick={this.showSortBy}>Sort By</button>
                    <div id='dropdown-content' className='show-info'>
                        <a href='#teamName' onClick={this.sortByTeamName}>Team Name</a>
                        <a href='#division' onClick={this.sortByDivision}>Division</a>
                    </div>
                <Info teamCards={this.state.teamCards}/>
            </div>
        );
    }
};

export default Cards;
