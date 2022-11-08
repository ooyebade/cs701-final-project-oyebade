import React, {useState, useEffect} from "react";
import { Button, DivBttn } from '../components/Button';
import  GamePlayer  from '../components/GamePlayer';
import  Dealer  from '../components/Dealer';
import { ActionController, BalanceContainer, DealerController, GameController, 
    GameHandsController, Msg, PlayerController, Placeholder, PointsController, PointsWorth, SubmitResult, SubmitTxt, Balance, 
    BetText, BalanceText, ChipText} from "../assets/styles/GameStyle";
import { Chip1Button, Chip5Button, Chip10Button, Chip25Button, Chip50Button, Chip100Button, Chip500Button } from "../assets/styles/GameStyle";
import {deckAmt, deckOfCardsLink, drawFirstCard, drawSecondCard, reShuffleDeckOfCard, shuffleDeckOfCards} from '../components/DeckOfCardsAPI';
import '../assets/styles/styles.css';
import Animation from "../assets/styles/Animation";
import clickSound from '../assets/sounds/clickSound.mp3';
import dealingCards from '../assets/sounds/dealingCards.mp3';
//import gameOverSound from '../assets/sounds/gameOver.mp3';


function BlackjackGame() {

    // useState will return a tuple where the first parameter ()
    //  ...is the current state of the deck. () allows us to update
    // ...the state of the deck.

    const [isDeckFilled, setIsDeckFilled] = useState(false);
    const [deck, setCardDeck] = useState({});     // declaring a new state variable for the card deck

    const [gamePlayer, setGamePlayer] = useState([]);     // declaring a new state variable for the player

    const [gameDealer, setGameDealer] = useState([]);     // declaring a new state variable for the dealer

    const [playerPoints, setPlayerPoints] = useState(0);     // declaring a new state variable that holds the player points

    const [dealersPoints, setDealersPoints] = useState(0);     // declaring the state variable for that holds the dealer points

    const [playerChoicesPoints, setPlayerChoicesPoints] = useState(0);     // new state variable for optional player points

    const [showPlayerChoicesPoints, setShowPlayerChoicesPoints] = useState(false);

    const [dealerChoicesPoints, setDealerChoicesPoints] = useState(0);     // new state variable for optional dealer points

    const [showDealerChoicesPoints, setShowDealerChoicesPoints] = useState(false);

    const [enablePlayerCards, setEnablePlayerCards] = useState(true);     // new state variable for the player cards

    const [playerRoundEnded, setPlayerRoundEnded] = useState(false);

    // new state variable for the player buy-in
    let playerCurrentBuyIn = 3000;
    const [playerBalance, setPlayerBalance] = useState(playerCurrentBuyIn);      // new state variable for the player buy-in

    const [currBet, setCurrentBet] = useState(0);     // setting the variable for the bet

    const [dealersBackCard, setDealersBackCard] = useState(false);     // back of the dealers card

    // game round
    let round = 3;
    const [gameRound, setGameRound] = useState(round); 

    const [placeGameBet, setPlaceBet] = useState(true);     // game bet

    // game msg
    const [msg, setMsg] = useState('How much are you betting?');
    const [betButtons, setBetButtons] = useState(true);

    const [forDouble, setForDouble] = useState(false);

    const [winnerList, setWinnerList] = useState([])

    const [savedGames, setSavedGames] = useState(false);

    const [gameEnded, setGameEnded] = useState(false);     // new state variable for the when the player is done with their round

    const [greatResults, setBestResults] = useState([]);

    // variable for the Hit Button
    let hitButton = enablePlayerCards === true && playerRoundEnded === false && placeGameBet === false;
    // variable for the stand button
    let standButton = playerRoundEnded === false && enablePlayerCards === true && placeGameBet === false;
    // variable for the double button
    let doubleButton = gamePlayer.length === 2 && playerRoundEnded === false && placeGameBet === false && playerBalance >= currBet;

    const betSound = new Audio(clickSound); // sound for when the player click on the chips
    const cardsSound = new Audio(dealingCards); // sound for when the card has been drawn
    // const gameOver = new Audio(gameOverSound);

    // passing an empty dependencies array to the useEffect hook...
    // ...so it runs only when the component mounts
    useEffect(() => {
        newDeck();         // creating a new deck side effect
        window.addEventListener('beforeunload', (ev) => 
        {  
            save()
            ev.preventDefault();             // cancel the event by the standard
            return ev.returnValue = 'Did you make up your mind?';             // return the value
        })
        return () => {
          window.removeEventListener('beforeunload', (ev) => 
          {  
            save()
            ev.preventDefault();             // cancel the event by the standard
            return ev.returnValue = 'Did you make up your mind?';             // return the value
          })
        }
    }, [])

    useEffect(() => {
        setPlayerPoints(() => {return 0})
        setPlayerChoicesPoints(() => {return 0})

        gamePlayer.map((card) => (
            card.value === "JACK" || card.value === "KING" || card.value === "QUEEN" ? (
                setPlayerPoints((points) => { return points + 10 }),
                setPlayerChoicesPoints((points) => {return points + 10})
            ):
            card.value === "ACE" ? (
                setPlayerPoints((points) => { return points + 11 }), 
                setPlayerChoicesPoints((points) => {return points + 1 }),
                setShowPlayerChoicesPoints(() => {return true})
            ):(
                setPlayerPoints((points) => { return points + parseInt(card.value) }),
                setPlayerChoicesPoints((points) => {return points + parseInt(card.value)})
            )
        ))
    }, [gamePlayer])

    useEffect(() => {
        setDealersPoints(() => {return 0})
        setDealerChoicesPoints(() => {return 0})

        if (gameDealer.length === 2 && playerRoundEnded === false) {
            if(gameDealer[0].value === "JACK" || gameDealer[0].value === "KING" || gameDealer[0].value === "QUEEN" ) {
                setDealersPoints((points) => { return points + 10 })
                setDealerChoicesPoints((points) => { return points + 10 }) 
            } else if ( gameDealer[0].value === "ACE" ) {
                setDealersPoints((points) => { return points + 11 })
                setDealerChoicesPoints((points) => { return points + 1 })
                setShowDealerChoicesPoints(() => {return true})
            } else {
                setDealersPoints((points) => { return points + parseInt(gameDealer[0].value) })
                setDealerChoicesPoints((points) => {return points + parseInt(gameDealer[0].value)})
            }
        } else {
            gameDealer.map((card) => (
                card.value === "JACK" || card.value === "KING" || card.value === "QUEEN" ? (
                    setDealersPoints((points) => { return points + 10 }),
                    setDealerChoicesPoints((points) => {return points + 10})
                ):
                card.value === "ACE" ? (
                    setDealersPoints((points) => { return points + 11 }), 
                    setDealerChoicesPoints((points) => {return points + 1 }),
                    setShowDealerChoicesPoints(() => {return true})
                ):(
                    setDealersPoints((points) => { return points + parseInt(card.value) }),
                    setDealerChoicesPoints((points) => {return points + parseInt(card.value)})
                )
            ))
        }
    }, [gameDealer, playerRoundEnded])

    useEffect(() => {
        
        if (playerPoints > 21 && playerChoicesPoints > 21) {
            setEnablePlayerCards(() => {return false})
            setMsg("Uh Oh...Looks like you lost");
            setTimeout(() => {
                computerWon();
            }, 2000);
        } else if (playerPoints === 21 || playerChoicesPoints === 21) {
            setMsg("Now you see...Blackjack.")
            setEnablePlayerCards(() => {return false})
            setTimeout(() => {
                stand()
            }, 2000);
        } else {
            forDouble === true && stand();
        }
    }, [playerPoints])

    useEffect(() => {
        if ( ((playerRoundEnded === true && dealersPoints <= 16) || (dealersPoints > 21 && dealerChoicesPoints <= 16)) && dealersPoints !== 0) {
            setMsg("Computers turn");
            draw(false, drawFirstCard);
        } else if (playerRoundEnded === true && dealersPoints !== 0) {
            let compareUserPoints;
            let compareCroupierPoints;
            if (playerPoints > 21 && (playerChoicesPoints > 0 && playerChoicesPoints <= 21) ) {
                compareUserPoints = playerChoicesPoints;
            } else {
                compareUserPoints = playerPoints;
            }

            if( dealersPoints > 21 && dealerChoicesPoints > 21){
                compareCroupierPoints = 0;
            } else if (dealersPoints > 21 && (dealerChoicesPoints > 0 && dealerChoicesPoints <= 21)) {
                compareCroupierPoints = dealerChoicesPoints;
            } else if (dealersPoints <= 21) {
                compareCroupierPoints = dealersPoints;
            }

            if( (21 - compareUserPoints) < (21 - compareCroupierPoints) ) {
                setMsg("Now you see...Blackjack!")
                setTimeout(() => {
                    playerWon();
                }, 2000);
            } else if ((21 - compareUserPoints) > (21 - compareCroupierPoints)){
                setMsg("Computer won")
                setTimeout(() => {
                    computerWon();
                }, 2000);
            } else {
                setMsg("Draw")
                setTimeout(() => {
                    noWinner();
                }, 2000);
            }
        }
    }, [dealersPoints])

    useEffect(() => {
        if (placeGameBet === true) {
            setMsg("How Much Are you Putting Down?");
            setBetButtons(true);
        }
    }, [placeGameBet])

    useEffect(() => {
        if ( gameRound > 5 ) {
            endGame();
        } else if (gameRound !== 1 && savedGames === false) {
            nextRound();
        } else {
            setSavedGames(false);
        }
    }, [gameRound])

    // calling the Deck Of Cards API to fecth the cards
    const newDeck = () => {
        fetch(deckOfCardsLink + shuffleDeckOfCards + deckAmt, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(responseData => {
                setIsDeckFilled(() => { return true; })
                setCardDeck( () => { return {...responseData}; })
            })
            .catch(err => {
              console.log('error : ' + err);
            });    
    }

    // calling the Deck Of Cards API to draw a card
    const draw = (forGamePlayer, cardsAmt) => {
        fetch(deckOfCardsLink + deck.deck_id + cardsAmt, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(responseData => {
                if (forGamePlayer === true) {
                    setGamePlayer((currentPlayerHand) => { return [...currentPlayerHand, ...responseData.cards]; })
                } else {
                    setGameDealer((currentGameDealer) => { return [...currentGameDealer, ...responseData.cards]; })
                }

            })
            .catch(err => {
              console.log('error : ' + err);
            });    
    }

    // calling the Deck Of Cards API to shuffle the card deck
    const shuffleDeck = (deckId) => {
        fetch(deckOfCardsLink + deckId + reShuffleDeckOfCard, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(responseData => {
                setIsDeckFilled(() => { return true; })
                setCardDeck( () => { return {...responseData}; })
            })
            .catch(err => {
              console.log('error : ' + err);
            });    
    }

    const stand = () => {
        setDealersBackCard(() => {return true})
        setTimeout(() => {
            setPlayerRoundEnded(() => {return true})
            setEnablePlayerCards(() => {return false})    
        }, 250);
    }

    const double = () => {
        setForDouble(true);
        setMsg("Going for double!")
        setPlayerBalance((balance) => {return balance - currBet})
        setCurrentBet((bet) => {return bet+bet})
        draw(true, drawFirstCard);
    }

    const startRound = () => {
        setPlayerRoundEnded(false);
        setEnablePlayerCards(true);
        setPlaceBet(false);
        setBetButtons(false);
        setMsg("Your turn");
        if (isDeckFilled === true) {
            draw(true, drawSecondCard);
            draw(false, drawSecondCard);
        }
    }

    const bet = (amount) => {
        if (playerBalance - amount >= 0) {
            setPlayerBalance((balance) => { return balance - amount});
            setCurrentBet((bet) => {return bet + amount})
        }
    }

    const playerWon = () => {
        setWinnerList((winners) => {return [...winners, "player"]})
        setPlayerBalance((balance) => {return balance + (currBet * 1.5)})
        setGameRound((round) => {return round + 1});
    }

    const computerWon = () => {
        setWinnerList((winners) => {return [...winners, "computer"]})
        setGameRound((round) => {return round + 1});
    }

    const noWinner = () => {
        setWinnerList((winners) => {return [...winners, "draw"]})
        setPlayerBalance((balance) => {return balance + currBet})
        setGameRound((round) => {return round + 1});
    }

    const nextRound = () => {
        setDealersBackCard(false);
        setForDouble(false);
        setShowDealerChoicesPoints(false);
        setShowPlayerChoicesPoints(false);
        setPlayerPoints(0);
        setPlayerChoicesPoints(0);
        setDealersPoints(0);
        setDealerChoicesPoints(0);
        setPlaceBet(true);
        setBetButtons(true);
        setCurrentBet(0);
        setGamePlayer([]);
        setGameDealer([]);
    } 

    // method to end the game 
    const endGame = () => {
        setGameEnded(true);
        setCurrentBet(0);
        setMsg("End of game");
        let rank = JSON.parse(localStorage.getItem("rank"));

        if( rank === undefined || rank === null) {
            localStorage.setItem("rank", JSON.stringify({
                points: [playerBalance]
            }))
        } else {
            let sortedRank = rank.points.sort(function(a, b) {
                return b - a;
              })
            if (sortedRank.length<=2) {
                setBestResults([...sortedRank])
            } else {
                setBestResults([sortedRank[0],sortedRank[1],sortedRank[2]])
            }
            localStorage.setItem("rank", JSON.stringify({
                points: [...rank.points, playerBalance]
            }))
        }
    }

    // method to reset the game in the case of playing again
    const reset = () => {
        setGameEnded(false);
        setIsDeckFilled(false);
        shuffleDeck(deck.deck_id);
        nextRound();
        setGameRound(1);
        setWinnerList([]);
        setPlayerBalance(3000);
    }

    // saving the players game result into a local storage
    const save = () => {
        localStorage.setItem("savedGame", JSON.stringify(
            {
                isDeckFilled: isDeckFilled,
                deck: deck,
                gamePlayer: gamePlayer,
                gameDealer: gameDealer,
                playerPoints: playerPoints,
                dealersPoints: dealersPoints,
                playerChoicesPoints: playerChoicesPoints,
                showPlayerChoicesPoints: showPlayerChoicesPoints,
                dealerChoicesPoints: dealerChoicesPoints,
                showDealerChoicesPoints: showDealerChoicesPoints,
                enablePlayerCards: enablePlayerCards,
                playerRoundEnded: playerRoundEnded,
                playerBalance: playerBalance,
                currBet: currBet,
                dealersBackCard: dealersBackCard,
                gameRound: gameRound,
                placeGameBet: placeGameBet,
                msg: msg,
                betButtons: betButtons,
                forDouble: forDouble,
                winnerList: winnerList
            }
        ));
    }

    // after the game is saved into the localStorage the player can load their saved data and continue where they left off
    const load = () => {
        setSavedGames(true);
        let gameSave = JSON.parse(localStorage.getItem('savedGame'));
        if (gameSave !== undefined) {
            setCardDeck(gameSave.deck);
            setGamePlayer(gameSave.gamePlayer);
            setGameDealer(gameSave.gameDealer);
            setPlayerPoints(gameSave.playerPoints);
            setDealersPoints(gameSave.dealersPoints);
            setPlayerChoicesPoints(gameSave.playerChoicesPoints);
            setShowPlayerChoicesPoints(gameSave.showPlayerChoicesPoints);
            setDealerChoicesPoints(gameSave.dealerChoicesPoints);
            setShowDealerChoicesPoints(gameSave.showDealerChoicesPoints);
            setEnablePlayerCards(gameSave.enablePlayerCards);
            setPlayerRoundEnded(gameSave.playerRoundEnded);
            setPlayerBalance(gameSave.playerBalance);
            setCurrentBet(gameSave.currBet);
            setDealersBackCard(gameSave.dealersBackCard);
            setGameRound(gameSave.gameRound);
            setPlaceBet(gameSave.placeGameBet);
            setMsg(gameSave.msg);
            setBetButtons(gameSave.betButtons);
            setForDouble(gameSave.forDouble);
            setWinnerList(gameSave.winnerList);
            setIsDeckFilled(gameSave.isDeckFilled);
        }
    }

    return (
        <GameController>
            {
                isDeckFilled === true ? (
                    <>
                        <BalanceContainer>
                            <Button to={'/'}>Menu</Button>

                            <DivBttn isEnabled={true} onClick={() => reset()}>{msg === "End of game" ? "New game" : "Reset"}</DivBttn>

                            <DivBttn isEnabled={msg !== "End of game"} onClick={() => save()}>Save</DivBttn>

                            <DivBttn isEnabled={hitButton || placeGameBet || gameEnded } onClick={() => (hitButton || placeGameBet || gameEnded) && load()}>Load</DivBttn>

                            <Balance>
                                <BalanceText>
                                    Balance: {playerBalance}
                                </BalanceText>
                            </Balance>
                            
                            <Chip1Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(1)}}>
                                <ChipText>1</ChipText>                                
                            </Chip1Button>
                            <Chip5Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(5)}}>
                                <ChipText>5</ChipText>                                
                            </Chip5Button>
                            <Chip10Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(10)}}>
                                <ChipText>10</ChipText>                                
                            </Chip10Button>
                            <Chip25Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(25)}}>
                                <ChipText>25</ChipText>                                
                            </Chip25Button>
                            <Chip50Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(50)}}>
                                <ChipText>50</ChipText>                                
                            </Chip50Button>
                            <Chip100Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(100)}}>
                                <ChipText>100</ChipText>                                
                            </Chip100Button>
                            <Chip500Button enabled={!placeGameBet} onClick={() => {
                                betSound.play();
                                placeGameBet && bet(500)}}>
                                <ChipText>500</ChipText>                                
                            </Chip500Button>

                            <Balance>
                                <BetText>
                                    Current bet: {currBet}
                                </BetText>
                            </Balance>
                        </BalanceContainer>

                        <GameHandsController onClick={() => {
                            cardsSound.play();
                        }}>
                            <DealerController>
                                {
                                    gameDealer.length > 0 ? (<Dealer dealerCurrHand={gameDealer} isReversed={dealersBackCard}/>) : (<Placeholder></Placeholder>)
                                }
                            </DealerController>
                            <PointsController>
                                <PointsWorth>
                                {showDealerChoicesPoints === false ? dealersPoints :
                                showDealerChoicesPoints === true && dealersPoints > 21 ?
                                dealerChoicesPoints :
                                dealersPoints +'/'+ dealerChoicesPoints}
                                </PointsWorth>
                            </PointsController>
                            <Msg>{msg}</Msg>
                            {   
                                gameEnded === true && 
                                <SubmitResult>
                                    <SubmitTxt>Results:</SubmitTxt>
                                    {
                                        greatResults.map((res, index) => {
                                            return <SubmitTxt key={index} >{index + 1} . {res} </SubmitTxt>
                                        })
                                    }
                                </SubmitResult>
                            }

                            {
                                betButtons && <DivBttn isEnabled={true} onClick={() => startRound()}>Start round</DivBttn>
                            }
                            <ActionController>
                                <DivBttn smallMargin={true} isEnabled={hitButton} onClick={() => {
                                    hitButton && draw(true, drawFirstCard)
                                }}>Hit</DivBttn>
                                <DivBttn smallMargin={true} isEnabled={standButton} onClick={() => {
                                    standButton && stand()
                                }}>Stand</DivBttn>
                                <DivBttn smallMargin={true} isEnabled={doubleButton}  onClick={() => {
                                    doubleButton && double()
                                }}>Double</DivBttn>
                            </ActionController>
                            <PointsController>
                                <PointsWorth>
                                    {playerChoicesPoints === false ? playerPoints :
                                    showPlayerChoicesPoints === true && playerPoints > 21 ?
                                    playerChoicesPoints :
                                    playerPoints }
                                </PointsWorth>
                            </PointsController>
                            <PlayerController>
                                {
                                    gamePlayer.length > 0 ? (<GamePlayer playerCurrHand={gamePlayer}/>) : (<Placeholder></Placeholder>)
                                }
                            </PlayerController>
                        </GameHandsController >
                    </>
                ) : (<Animation/>)
            }
        </GameController >
    )
}

export default BlackjackGame;