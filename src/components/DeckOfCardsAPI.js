// using the Deck of Cards API
//Link: https://www.deckofcardsapi.com/ */}

// declaring the deck of cards api link
export const deckOfCardsLink = 'https://www.deckofcardsapi.com/api/deck/';
// declaring the api link that shuffles the deck of cards
//  adding the deck_count as a GET or POST parameter defining 
  //  the amount of Decks to use */}
export const shuffleDeckOfCards = 'new/shuffle/?deck_count=';
// declaring the number of Decks to use
// since the typically deck is 6...I'll use 8
export const deckAmt = 8;
// declaring the api link that'll draw a card
export const drawFirstCard = '/draw/?count=1';
// declaring the api that'll draw another card
export const drawSecondCard = '/draw/?count=2';
// declaring the api that'll re-shuffle the cards
export const reShuffleDeckOfCard = '/shuffle/';
