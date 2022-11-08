import React  from 'react';
import { Card } from '../assets/styles/Card';


function Player(playerCurrHand) {

    return (
        <>
            {
                playerCurrHand.playerCurrHand.map((card, index) => (
                    <Card key={index} cardImg={card.image} />
                ))
            }
        </>
    )
}

export default Player