import React from "react";
import styled from 'styled-components';
import CardBack from '../assets/images/backCard.png';


 const CardContainer = styled.div `
    position: relative;
    display: flex;
    width: 100px;
    height: 140px;
    z-index: 12;
    margin: 0 6px;
`

 const Card = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    transform: ${({reversed}) => (reversed ? 'rotateY(180deg)' : 'none')};
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
`

 const AverageImg = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: ${({cardImg}) => (cardImg ? 'url(' + cardImg + ')' : 'url(' + cardImg + ') ') };
    background-size: cover;
    background-position: center;
    border-radius: 5px;
`

 const Reversed = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-image: url(${CardBack});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    transform: rotateY(180deg);
`

function ReverseStyle({cardImg, isReversed}) {
    return (
        <CardContainer>
            <Card reversed={!isReversed}>
                <AverageImg cardImg={cardImg}/>
                <Reversed />
            </Card>
        </CardContainer>
    )
}

export default ReverseStyle;