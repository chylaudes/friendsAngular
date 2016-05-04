angular.module('friendsJeopardyApp')
  .controller('FriendsIndexController', FriendsIndexController);
function FriendsIndexController() {
  console.log("HELLO")
  var vm = this;

  vm.helloWorld = 'hello world';

  // initialization
  console.log(vm.helloWorld);

}
