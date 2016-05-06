angular.module('friendsJeopardyApp')
  .service('TurnTrackerService', TurnTrackerService);

function TurnTrackerService(){
  var self = this;
  self.count = 0;
  self.teams = [];
  self.currentTeam = {};
  self.winningCount = 0;
  self.winningTeam = {};

  self.changeTurns = changeTurns;
  self.winner = winner;

  function changeTurns(){
    if (self.count === self.teams.length){
      self.count = 0;
      self.currentTeam = self.teams[self.count];
    } else {
      self.currentTeam = self.teams[self.count];
    }
  }

function winner(){
  if (self.winningCount === 25 ) {
    self.winningTeam = findWinner(self.teams);
  } else{
    return {};
  }
}

function findWinner(teams) {
  var max = teams[0].score;
  var winningTeam = teams[0];
  teams.forEach(function(x, i){
    if (max < teams[i].score){
      max = teams[i].score;
      winningTeam = teams[i];
    }
  });
  return winningTeam;
  }

}
