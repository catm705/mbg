// constant variables
var constants = new (function() {
    var rows = 3;
    var columns = 6;
    var numMatches = (rows * columns) / 2;

    this.getRows = function() { return rows; };
    this.getColumns = function() { return columns; };
    this.getNumMatches = function() { return numMatches; };
})();

// Global Variables
var	currentSessionOpen = false;
var	previousCard = null;
var numPairs = 0;

// this function creates deck of cards that returns an object of cards
// to the caller
function createDeck() {
	var rows = constants.getRows();
	var cols = constants.getColumns();
	var key = createRandom();
	var deck = {};
	deck.rows = [];

	// create each row
	for(var i = 0; i < rows; i++) {
		var row = {};
		row.cards = [];

		// creat each card in the row
		for (var j = 0; j < cols; j++) {
			var card = {};
			card.isFaceUp = false;
			card.item = key.pop();
			row.cards.push(card);
		}
		deck.rows.push(row);
	}
	return deck;
}

// used to remove something form an array by index
function removeByIndex(arr, index) {
    arr.splice(index, 1);
}

function insertByIndex(arr, index, item) {
	arr.splice(index, 0, item);
}

// creates a random array of items that contain matches
// for example: [1, 5, 6, 5, 1, 6]
function createRandom() {
	var matches = constants.getNumMatches();
	var pool = [];
	var answers = [];
	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
					, 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'
					, 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

	var hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'が', 'き'
					, 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ'
					, 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ'
					, 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'つ', 'づ', 'て'
					, 'で', 'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の'
					, 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ'
					, 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま'
					, 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら'
					, 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];
	// set what kind of item to display
	var items = hiragana;

	// create the arrays for random numbers and item holder
	for (var i = 0; i < matches * 2; i++) {
		pool.push(i); // random numbers
	}

	// generate an array with the random items
	for (var n = 0; n < matches; n++) {
		// grab random letter from array and remove that letter from the
		// original array
		var randLetter = Math.floor((Math.random() * items.length));
		var letter = items[randLetter];
		removeByIndex(items, randLetter);
		// generate two random placements for each item
		var randPool = Math.floor((Math.random() * pool.length));

		// remove the placeholder from answers and insert the letter into
		// random slot
		insertByIndex(answers, pool[randPool], letter);

		// remove random number from pool
		removeByIndex(pool, randPool);

		// redo this process for the second placement
		randPool = Math.floor((Math.random() * pool.length));
		insertByIndex(answers, pool[randPool], letter);

		// remove rand number from pool
		removeByIndex(pool, randPool);
	}
	return answers;
}

var app = angular.module('cards', ['ngAnimate']);

app.controller("CardController", function( $scope, $timeout ) {
	$scope.deck = createDeck();
	$scope.isGuarding = true;
	$scope.inGame = false;

	$scope.check = function(card) {
		if (currentSessionOpen && previousCard != card && previousCard.item == card.item && !card.isFaceUp) {
			card.isFaceUp = true;
			previousCard = null;
			currentSessionOpen = false;
			numPairs++;
		} else if(currentSessionOpen && previousCard != card && previousCard.item != card.item && !card.isFaceUp) {
			$scope.isGuarding = true;
			card.isFaceUp = true;
			currentSessionOpen = false;
			$timeout(function() {
				previousCard.isFaceUp = card.isFaceUp = false;
				previousCard = null;
				$scope.isGuarding = $scope.timeLimit ? false : true;
			}, 1000);
		} else {
			card.isFaceUp = true;
			currentSessionOpen = true;
			previousCard = card;
		}

		if (numPairs == constants.getNumMatches()) {
			$scope.stopTimer();
		}
	} //end of check()

	// for the timer
	$scope.timeLimit = 60000;
	$scope.isCritical = false;

	var timer = null;

	// start the timer as soon as the player presses start
	$scope.start = function(){
		$scope.deck = createDeck();
		// set the time of 1 minutes and remove the cards guard
		$scope.timeLimit = 60000;
		$scope.isGuarding = false;
		$scope.inGame = true;

		($scope.startTimer =function() {
			$scope.timeLimit -= 1000;
			$scope.isCritical = $scope.timeLimit <= 10000 ? true : false;

			timer = $timeout($scope.startTimer, 1000);
			if ($scope.timeLimit === 0) {
				$scope.stopTimer();
				$scope.isGuarding = true;
			}
		})();
	}
	// function to stop the timer
	$scope.stopTimer = function() {
	  $timeout.cancel(timer);
	  $scope.inGame = false;
	  previousCard = null;
	  currentSessionOpen = false;
	  numPairs = 0;
	}

});
