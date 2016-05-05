angular.module('friendsJeopardyApp')
.controller('ModalInstanceCtrl', ModalInstanceCtrl)

ModalInstanceCtrl.$inject = ['$uibModalInstance', 'card']

function ModalInstanceCtrl( $uibModalInstance, card ) {
  var vm = this;
  vm.card = card
  debugger

  vm.ok = function () {
    console.log("okay");
    $uibModalInstance.dismiss('cancel');
  };

  vm.cancel = function () {
    console.log("cancel");
    $uibModalInstance.dismiss('cancel');
  };
}
