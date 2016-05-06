angular.module('friendsJeopardyApp')
.controller('ModalWelcomeCtrl', ModalWelcomeCtrl)

ModalWelcomeCtrl.$inject = ['$uibModalInstance', '$uibModal', '$interval','$sce'];

function ModalWelcomeCtrl(  $uibModalInstance,    $uibModal,   $interval,  $sce) {
  var vm = this;
  vm.teams = [];
  vm.newTeam = {
    score: 0,
  };
  vm.noTeam = false;
  vm.startGame = true;

  vm.createTeam = function() {
    if (vm.teams.length === 4){
      vm.teams.push(vm.newTeam);
      vm.newTeam = {};
      vm.noTeam = true;
      alert("Reached the Maxium of Players! Time to Start the Game!");
    } else {
      vm.teams.push(vm.newTeam);
      vm.newTeam = { score: 0 }
      vm.startGame = false;
    }
  };

  vm.ok = function () {
    $uibModalInstance.close(vm.teams);
  };

}
