import React from 'react';
import './Info.css';

class Info extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            teamCards: this.teamCards
        }
    }

    render(){
        return(
            <div className='card-container'>
                    {
                        this.props.teamCards.map(card => {
                            return(
                                <div key={card.id}>
                                    <div className='single-card' onClick={this.showInfo}>
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
                </div>
        )
    }
    
}

export default Info;
