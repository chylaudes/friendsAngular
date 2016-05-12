angular.module('friendsJeopardyApp')
.controller('ModalWelcomeCtrl', ModalWelcomeCtrl);

ModalWelcomeCtrl.$inject = ['$scope','$uibModalInstance', '$uibModal', '$interval','$sce', 'lodash'];
function ModalWelcomeCtrl(  $scope, $uibModalInstance,    $uibModal,   $interval,  $sce, lodash) {
  var vm = this;
  vm._ = lodash;
  vm.teams = [];
  vm.newTeam = {
    score: 0
  };
  vm.noTeam = false;
  vm.startGame = true;

  vm.createTeam = function() {
    checkName(vm.newTeam.name);
    if (JSON.stringify(vm.newTeam) !== JSON.stringify({score: 0}) ){
      if (vm.teams.length === 4){
        vm.teams.push(vm.newTeam);
        vm.newTeam = {score: 0};
        vm.noTeam = true;
        alert("Reached the Maxium of Players! Time to Start the Game!");
      } else {
        vm.teams.push(vm.newTeam);
        vm.startGame = false;
        vm.newTeam = {score: 0};
      }
    } else {
      vm.newTeam = {score: 0};
    }
  };

function checkName(name) {
  if (name === ""  || name === undefined ){
    alert ("We don't allow empty values.  Enter another name!");
    vm.newTeam = {score: 0};
  } else if (vm._.findIndex(vm.teams, {name: name}) === -1 ) {
    name = name.trim();
    vm.newTeam.name = name;
  } else {
    alert ("Name already exist!  Pick another name please!");
    vm.newTeam = {score: 0};

  }
}

  vm.ok = function () {
    $uibModalInstance.close(vm.teams);
  };

}
