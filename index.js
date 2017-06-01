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
		//console.log("This is the length " + this.card.length)
		return this.card;
	}

}

//instance
let deck = new DeckOfCard;

let allCard = deck.createNewDeck();

//console.log("All cards " + allCard)
/**/
//Check to print out deck
//console.log(allCard.createNewDeck())

//console.log("First card in deck " + allCard[0].nameOfCard);



class createdDeck{
	constructor(){
		this.deck= allCard
		//this.shuffle = []
		this.dealCards = []
		//this.playerHand1 = []
		//this.playerHand2 = []
	}


	deal(){

		for (var i = 0; i < allCard.length; i++) {

				//this.dealCards.push( this.deck[i].nameOfCard );

				//Creates random card in loop
				//console.log("RANDOM CARD : " + this.deck[Math.floor(Math.random() * this.deck.length)].nameOfCard);

				this.dealCards.push(this.deck[Math.floor(Math.random() * this.deck.length)].nameOfCard);
				
				//this.dealCards.splice(26);
				
		}

		return this.dealCards

		//console.log("Shift this card " + this.dealCards.shift())


	}

}
		

let dealingCards = new createdDeck();

let playerHand1 = dealingCards.deal().splice(0,26);

let playerHand2 = dealingCards.deal().splice(26, 26);

// console.log("Player1 Cards: " + dealingCards.deal().splice(0,25));
// console.log("Player2 Cards: " + dealingCards.deal().splice(26, 26));

console.log("Player 1 has " + playerHand1.length, playerHand1)
console.log("Player 2 has " + playerHand2.length, playerHand2)

//Player class for players action
let whosTurn

class Player {

	constructor(){
		this.username = ""
		this.hand = []
	}

//Cards the player has
	drawCard(win, lose){

	}
// draw and lose
	loseCard(){

	}
//draw and win
	winCard(){

	}


}


var prompt = require('prompt');

prompt.start();
prompt.get(['player1','player2'], function(err, result){

	let FirstPlayer = result.player1;


	console.log(result.player1 + ' versus ' + result.player2);
	console.log("IT'S WAR!!!")
	console.log(FirstPlayer)

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




