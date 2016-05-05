angular.module('friendsJeopardyApp')
.controller('ModalInstanceCtrl', ModalInstanceCtrl)

ModalInstanceCtrl.$inject = ['$uibModalInstance', '$uibModal', '$interval','$sce', 'card']

function ModalInstanceCtrl(  $uibModalInstance,    $uibModal,   $interval,  $sce,   card ) {
  var vm = this;
  vm.card = card
  vm.htmlVidAnswer = $sce.trustAsHtml(card.vidanswer)

  vm.htmlVid = $sce.trustAsHtml(card.vid)
  vm.count = card.count
  $interval(function() {
            if (vm.count > 0) {
              vm.count = vm.count - 1;
            }
          }, 1000);
  vm.showAnswer = function (e, card) {
    $uibModalInstance.dismiss('cancel');
    var modalInstanceSecond = $uibModal.open({
      templateUrl: 'templates/modalAnswer.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'modalCtrl',
      backdrop: 'static',
      resolve: {
        card: function(){
          return card;
        }
      }
    });
};//end of showAnswer

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}
