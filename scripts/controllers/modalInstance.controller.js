angular.module('friendsJeopardyApp')
.controller('ModalInstanceCtrl', ModalInstanceCtrl);

ModalInstanceCtrl.$inject = ['$uibModalInstance', '$uibModal', '$interval', '$sce', 'TurnTrackerService', 'card'];

function ModalInstanceCtrl(  $uibModalInstance,    $uibModal,   $interval,   $sce,   TurnTrackerService,   card ) {
  var vm = this;
  vm.card = card;
  vm.htmlVidAnswer = $sce.trustAsHtml(card.vidanswer);

  vm.htmlVid = $sce.trustAsHtml(card.vid);
  vm.count = card.count;

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

//results of the secondModalInstance
    modalInstanceSecond.result.then(function (){
      TurnTrackerService.count++;
      TurnTrackerService.changeTurns();

    }, function (){
      console.log('SECOND MODAL DISMISSED AT:' + new Date());

    });
};//end of showAnswer

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  vm.ok = function () {
    $uibModalInstance.close();
  };

}
