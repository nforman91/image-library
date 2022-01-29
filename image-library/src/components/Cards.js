import React, { useState } from 'react';
import Info from './Info';
import logos from '../logos/Logos';

const Cards = () => {
    const [teamCards, setTeamCards] = useState(logos);

    return (
        <div>
            {teamCards && 
                <Info teamCards={teamCards} setTeamCards={setTeamCards}/>
            }
        </div>
    );
};

export default Cards;
