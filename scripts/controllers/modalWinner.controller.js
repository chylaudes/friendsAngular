angular.module('friendsJeopardyApp')
.controller('ModalWinnerCtrl', ModalWinnerCtrl);


ModalWinnerCtrl.$inject = ['$uibModalInstance', 'winner'];
function ModalWinnerCtrl(   $uibModalInstance,   winner  ){
  var vm = this;
  vm.winner = winner;

}
