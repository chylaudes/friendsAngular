angular.module('friendsJeopardyApp')
.directive('gameCard', gameCard);


function gameCard(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl:  "templates/gameCard.html",
    controller: GameCardController,
    controllerAs: 'gameCardCtrl',
    scope: {
      card: '=card'
    }
  };
  return directive;
}

function GameCardController(){
  var vm = this;
}
