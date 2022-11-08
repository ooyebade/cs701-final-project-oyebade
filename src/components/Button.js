import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {styles} from '../assets/styles/styles';

export const Button = styled(Link)`
    border-radius: 20px;
    background: ${styles.primaryButton};
    white-space: nowrap;
    padding: 8px 16px;
    color: ${styles.textForButton};
    font-size: 20px;
    min-width: 100px;
    margin: 4px 0;
    margin: ${({smallMargin}) => (smallMargin ? '0px 5px 0px 5px ' : '4px 0')};
    border: solid 5px;
    border-color: ${styles.borderForButton};
    text-shadow: ${styles.textShadow};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
    gap: 5px;


    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.1;
        background: ${styles.hoverOverButton};
    }
`

export const DivBttn = styled.div`
    border-radius: 20px;
    background: ${styles.primaryButton};
    white-space: nowrap;
    padding: 8px 16px;
    color: ${styles.textForButton};
    font-size: 18px;
    min-width: 100px;
    margin: 4px 0;
    margin: ${({smallMargin}) => (smallMargin ? '0px 5px 0px 5px ' : '4px 0')};
    border: solid 5px;
    border-color: ${styles.borderForButton};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;
    gap: 6px;

    &:hover {
        transition: all 0.2s ease-in-out;
        scale: 1.1;
        background:${({isEnabled}) => (isEnabled ?  styles.hoverOverButton : styles.disabled)};
    }
`

export default Button