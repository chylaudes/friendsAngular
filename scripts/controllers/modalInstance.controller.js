angular.module('friendsJeopardyApp')
.controller('ModalInstanceCtrl', ModalInstanceCtrl)

ModalInstanceCtrl.$inject = ['$uibModalInstance', '$uibModal', '$sce', 'card']

function ModalInstanceCtrl( $uibModalInstance, $uibModal, $sce, card ) {
  var vm = this;
  vm.card = card
  vm.htmlVidAnswer = $sce.trustAsHtml(card.vidanswer)

  vm.htmlVid = $sce.trustAsHtml(card.vid)
  vm.youtube = $sce.trustAsHtml('<iframe width="560" height="315" src="//www.youtube.com/embed/FZSjvWtUxYk" frameborder="0" allowfullscreen></iframe>');

  vm.showAnswer = function (e, card) {
    $uibModalInstance.dismiss('cancel');
    var modalInstanceSecond = $uibModal.open({
      templateUrl: 'templates/modalAnswer.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'modalCtrl',
      resolve: {
        card: function(){
          return card;
        }
      }
    });

};//end of showAnswer

  vm.cancel = function () {
    console.log("cancel");
    $uibModalInstance.dismiss('cancel');
  };

}
