import React, { useState } from 'react';
import './Info.css';
import logos from '../logos/Logos';
import Modal from './Modal';

const Info = (props) => {
    const { teamCards } = props;
    // const [data, setData] = useState(teamCards);
    console.log('PROPS.TEAMCARDS[0]: ', props.teamCards[0])

    const showModal = 0

    // changeMyVariable = (selected) => {
    //     console.log('SELECTED: ', selected.team_name)
    //     this.setState(
    //         prevState => ({ showModal: !prevState.showModal })
    //     )
    // }

    const showInfo = (selected) => {
        // let showModal++
        // let showModal = true;
        console.log('SELECTED: ', selected.team_name);
        // showModal++
        // if(showModal % 2 == 0){
        
        // } else {

        // }

        // let modal = document.getElementById('modal');
        // modal.innerText = `THIS IS THE MODAL: ${selected.team_name}`;
        // document.body.appendChild(modal);
        // let displaySetting = modal.style.display;
        // let cardButton = document.getElementById('card-id');
        // let showModal = 1;
        // showModal++
        // if(showModal % 2 === 0){
        //     document.appendChild('modal')
        // } else {
        //     document.removeChild('modal')
        // }
        // <Modal/>
        // {
        //     <div>
        //         <h4>Team Name: {this.props.selected.team_name}</h4>
        //         <h4>Conference: {this.props.selected.conference}</h4>
        //         <h4>Division: {this.props.selected.division}</h4>
        //     </div>
        // }
        document.getElementById('modal').classList.toggle('show-info');
    }

    const showTeamLogo = (logo) => {
        return(
            // logos.map(logo => {
            //     return(
            //         <img className="team-logo" src={logo.url} alt="team-logo"/>
            //     )
            // })
            <div>
                <img className="team-logo" src={logo.url} alt="team-logo"/>
            </div>
        )
    }

    const showTeamCard = (card) => {
        console.log('HIT', card)
        // showTeamLogo(card)
        return(
            <div key={card.id}>
                <div id='card-id'
                    className='single-card' 
                    onClick={() => showInfo(card)}
                    // onClick={() => this.changeMyVariable()}
                >
                    <figure className='circle'></figure>
                    {/* <img className='team-logo' src={card.url} alt='team-logo'/> */}
                    <h2 className='card-title'>{card.name}</h2>
                </div>
                {/* <Modal 
                    id='modal' 
                    className='show-info' 
                    selected={card}
                /> */}
            </div>
        )
    }

    return(
        <div className='card-container'>
            {
                teamCards.map(card => {
                    return(
                        showTeamCard(card)
                    )
                })
            }
            {
                logos.map(logo => {
                    return(
                        showTeamLogo(logo)
                    )
                })
            }
        </div>
    )
}

export default Info;

// [teamCards].map(data => {
//                     console.log('TEAMCARDS 1st MAP [0]: ', data[0])
//                     data.map(card => {
//                         showTeamCard(card)
//                         // <div key={card.id}>
//                         //     <div id='card-id'
//                         //         className='single-card' 
//                         //         onClick={() => showInfo(card)}
//                         //         // onClick={() => this.changeMyVariable()}
//                         //     >
//                         //         <figure className='circle'></figure>
//                         //         <img className='team-logo' src={card.url} alt='team-logo'/>
//                         //         <h2 className='card-title'>{card.team_name}</h2>
//                         //     </div>
//                         //     <Modal 
//                         //         id='modal' 
//                         //         className='show-info' 
//                         //         selected={card}
//                         //     />
//                         //     {/* {
//                         //         showModal &&
//                         //         <div id='modal' className='show-info'>
//                         //             <h4>Team Name: {this.props.selected.team_name}</h4>
//                         //             <h4>Conference: {this.props.selected.conference}</h4>
//                         //             <h4>Division: {this.props.selected.division}</h4>
//                         //         </div>
//                         //     } */}
//                         // </div>
//                     })
//                 })
