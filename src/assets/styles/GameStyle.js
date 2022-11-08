import styled from 'styled-components';
import { styles } from './styles';


export const GameController = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const GameHandsController = styled.div `
    display: flex;
    flex: 3;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 75vh;
    padding: 0;
    margin: 2px;
    box-sizing: border-box;
}
`

export const PlayerController = styled.div `
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 24px;
`

export const DealerController = styled.div `
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

export const ActionController = styled.div `
    display: flex;
    flex: 2;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    margin: 50px 0 50px 0;
`

export const PointsController = styled.div `
    display: flex;
    width: 100px;
    min-height: 40px;
    border-radius: 30px;
    margin-top: 15px;
    margin-bottom: 5px;
    border: solid 5px ${styles.borderForButton};
    background-color: darkred;
    align-items: center;
    justify-content: center;
`

export const PointsWorth = styled.div `
    color: '#000000';
    text-align: center;
    font-weight: bold;
`

export const BalanceContainer = styled.div`
    position:absolute;
    width: calc(64% - 15);
    margin: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    color: black;
    text-align: center;
    justify-content: space-between;
    align-items: center;
`

export const Balance = styled.div`
    background-color: #CBDCCB  ;
    align-items:center;
    justify-content:center;
    border: 8px solid gray;
    width: 180px;
    height: 70px;
    margin: 3px 0 3px 0;
    border-radius: 25px;
`

export const BalanceText = styled.h5`
    color: black;
    margin: 12px 0 12px 0;
    text-align: center;
    font-size: 19px;
    font-weight: bold;

`

export const BetText = styled.h5`
    color: black;
    margin: 12px 0 12px 0;
    text-align:center;
    font-size: 19px;
    font-weight: bold;

`


export const ChipText = styled.h4`
    color: black;
    text-align:center;
    font-size: 20px;
    font-weight: bold;
`

export const Msg = styled.h2`
    color:white;
    margin: 100px;
`

export const Placeholder = styled.div`
    width: 100px;
    height: 140px;
    background-color: rgba(0,0,0,0);
    background-size:cover;
    background-position:center;
    margin: 0 6px;
`

export const SubmitResult = styled.div`
    display:flex;
    background-color: ${styles.hoverOverButton};
    padding: 12px;
    border: 5px solid black; 
    border-radius: 12px;
`

export const SubmitTxt = styled.h4`
    margin: 2px;
    color:white;
`


export const Chip1Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet1Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;
    

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`


export const Chip5Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet5Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`


export const Chip10Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet10Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`


export const Chip25Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet25Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`


export const Chip50Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet50Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;


    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`


export const Chip100Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet100Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`


export const Chip500Button = styled.div `
    display: flex;
    width: 100px;
    height: 100px;
    background-color: ${styles.bet500Color};
    border: 8px solid black;
    border-radius: 50%;
    margin: 1px;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border-radius: 50px;
    border: 8px dashed black;
    margin: 4px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({enabled}) => (enabled ? styles.disabled : styles.hoverOverButton)}
    }
`