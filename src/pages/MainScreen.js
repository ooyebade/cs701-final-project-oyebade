import React, { Component } from 'react';
import introSound from '../assets/sounds/intro.mp3';
import bj from '../assets/images/bj.gif';
import { Button } from '../components/Button';
import '../assets/styles/styles.css';
import Audio from 'react-h5-audio-player';
// using from the following page: https://www.npmjs.com/package/react-h5-audio-player
import 'react-h5-audio-player/lib/styles.css';


// creating a main page component which will extend the component
class Main extends Component {


    render() {

    return (
            <div className='mainScreen'>

                <Audio
                    src={introSound} volume={0.3}
                />

                {/** displaying the main screen header */}
                <h1>Welcome to Naija BlackJack</h1>

                <div className='contentContainer'>
                    <img src={bj} alt='Decks of Cards falling down' />
                    <ul>
                        <li><Button to={'/rules'}>How To Play</Button></li>

                        <li><Button to={'/ranks'}>High Scores</Button></li>

                        <li><Button to={'/game'}>Start Game</Button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Main
