angular.module('friendsJeopardyApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngSanitize','ngLodash'])
       .config(config);

////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/index.html',
      controller: 'FriendsIndexController',
      controllerAs: 'friendsIndexCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
