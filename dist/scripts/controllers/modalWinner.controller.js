angular.module('friendsJeopardyApp')
.controller('ModalWinnerCtrl', ModalWinnerCtrl);


ModalWinnerCtrl.$inject = ['$uibModalInstance', '$window', 'winner'];
function ModalWinnerCtrl(   $uibModalInstance,   $window,   winner  ){
  var vm = this;
  vm.winner = winner;

  vm.playAgain = function(){
    $window.location.reload();
  };

}
