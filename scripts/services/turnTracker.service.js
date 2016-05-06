angular.module('friendsJeopardyApp')
  .service('TurnTrackerService', TurnTrackerService);

function TurnTrackerService(){
  console.log("SERVICE HERE");
  var self = this;
  self.count = 0;
  self.teams = [];
  self.currentTeam = {};

  self.changeTurns = changeTurns;

  function changeTurns(){
    if (self.count === self.teams.length){
      self.count = 0;
      self.currentTeam = self.teams[self.count];
    } else {
      self.currentTeam = self.teams[self.count];
    }
  }



}
