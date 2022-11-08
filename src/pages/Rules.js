import React, { Component } from "react";
import '../assets/styles/rulesStyle.css';
import { Button } from '../components/Button';
import { PreviousButton } from '../assets/styles/RankStyle';



// displaying the rules for blackjack
class Rules extends Component {

    render() {
        return (
            <div className="rules">
                <PreviousButton>
                <Button to='/'>Previous</Button>
                </PreviousButton>

                <h1 className="rules-tile">How To Play</h1>

                <h3>Aim</h3>

                <ul>
                    <li>The aim of blackjack is to finish the game with a higher total than that of the dealer, without exceeding 21.</li>
                    <li>Going over 21 is commonly known as ‘busting’ and means an automatic loss.</li>
                </ul>

                <h3>BlackJack Objective</h3>

                <ul>
                    <li>Collect Cards that total more points than the dealer, without going over 21.</li>
                    <li></li>
                </ul>

                <h4>Card Values</h4>
                
                <ul>
                    <li>Cards of rank 2 through 10 are valued according to their face value.</li>
                    <li>All face cards are 10 points. Aces can be worth either 1 or 11 points.</li>
                    <li>Blackjack is the highest hand totaling 21 and is made of an Ace and any 10-point card.</li>
                </ul>
            </div>
        );
    }
}

export default Rules