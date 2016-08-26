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
