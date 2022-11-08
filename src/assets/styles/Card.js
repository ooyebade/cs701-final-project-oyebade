import styled from 'styled-components';

export const Card = styled.div `
    posititon: relative;
    display flex;
    width: 100px;
    height: 140px;
    z-index: 12;
    background-image: ${({cardImg}) => (cardImg ? 'url(' + cardImg + ')' : 'url(' + cardImg + ') ') };
    background-size: cover;
    background-position: center;
    margin: 0 6px;
    border-radius: 5px;

`