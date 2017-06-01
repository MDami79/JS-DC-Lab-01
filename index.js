//Players must be prompted for their username so it can be saved, then game begins



//Create deck of cards

const suits = ['hearts', 'clubs', 'spades', 'diamonds'];
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 };

class Card {
	constructor( rank, suit ){

		this.suits = suit
		this.ranks = rank
		this.rankScores = rankScores[rank]
		this.nameOfCard = `${rank} of ${suit}`

	}
}

/*
//test to see if it works to build card
let sevenOfhearts = new Card('hearts', 'seven');
console.log(sevenOfhearts);
*/

class DeckOfCard{

	constructor(){
		this.card = []
	}

	createNewDeck(){
		for (let i = 0; i < suits.length; i++) {
			for (let j = 0; j < ranks.length; j++){

				this.card.push( new Card( ranks[j], suits[i] ) )

			}
		}
		return this.card;
	}

}

/*
//Check to print out deck
let testDealCard = new DeckOfCard();
console.log(testDealCard.createNewDeck())
*/

console.log()

//Player class for players action
class Player {

	constructor(){
		this.username = ""
		this.hand = []
	}

	showCard(win, lose){

	}

	loseCard(){

	}

	winCard(){

	}


}




 var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['username', 'email'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });

// let createdeck = new DeckOfCard;

// createdeck.createNewDeck()

// console.log( createdeck )
//Deck of cards need to be shuffled using RANDOM
//Cards divided by each player
//Players draw their cards for each ROUND
//Who ever wins the round gets the opponents card
//Each round shows current round, cards each player drew, who is winning and how many cards each player has
//IF players draw cards that has same score, then War is Declared print "WAR!"
//IF war is declared draw cards until a player wins and collects card
//Niether player knows what's in each others deck. Interesting
//IF a player gets all 52 cards, and the other one as none, the player with 52 cards wins



// var prompt = require('prompt')

// prompt.start();
