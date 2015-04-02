angular
    .module("tictactoe")
    .controller("tictactoe", tictactoe);

tictactoe.$inject = ['$firebaseObject', '$firebaseArray']; //injected my controller with firebase

function tictactoe($firebaseObject, $firebaseArray){
    var self = this;
    self.scoretest1 = 0;
    self.scoretest2 = 0;
    self.pickSquare = pickSquare;

    var pepsiScore = 0; // established pepsi's score is 0
    var cokeScore = 0; // established coke's score is 0

    var coke = ("images/cokesm.png")
    var pepsi = ("images/pepsism.png")
    var blank = ("images/coke.png")

    var playerturn = 0;

self.listholes = [ 
        { name: "1", image: "images/blank.png"},
        { name: "2", image: "images/blank.png"},
        { name: "3", image: "images/blank.png"},
        { name: "4", image: "images/blank.png"},
        { name: "5", image: "images/blank.png"},
        { name: "6", image: "images/blank.png"},
        { name: "7", image: "images/blank.png"},
        { name: "8", image: "images/blank.png"},
        { name: "9", image: "images/blank.png"},
    ] 

      function pickSquare($index){
        var ref = new Firebase('https://cokevspepsi.firebaseio.com');
        var playerSelection = $firebaseObject(ref);
          
          if (playerturn === 1 || 3 || 5 || 7){
            self.listholes[$index].image = pepsi;
            self.scoretest2++;
            playerturn++;
            // return playerturn;
          } else 

          if (playerturn === 0 || 4 || 6 || 8){
            self.listholes[$index].image = coke;
            self.scoretest1++;
            playerturn++;
            // return playerturn;
          }

          console.log(playerturn);

        }
    }; // End of the function GuacamoleController($firebaseObject)














/* command + option + / */ 

//IF THEN STATEMENTS//
// if cell numbers 1,2,3 are equal / winner
// if cell numbers 4,5,6 are equal / winner
// if cell numbers 7,8,9 are equal / winner

// if cell numbers 1,4,7 are equal / winner
// if cell numbers 2,5,8 are equal / winner
// if cell numbers 3,6,9 are equal / winner

// if cell numbers 1,5,9 are equal / winner
// if cell numbers 3,5,7 are equal / winner


//DOn't Forget to Post the Score
        // function postScore(){
        //     var ref = new Firebase('https://guacamolenrm.firebaseio.com/pScore');
        //     var pScore = $firebaseObject(ref);

        //     pScore.$loaded(function(){
        //         pScore.holes = [];
        //         pScore.currentMolePosition = 0;
        //         pScore.score = 0;
        //         for(var i = 0; i <9; i++){
        //           pScore.holes.push({moleIsHere: false});
        //         }
                    
        //         pScore.$save();
        //         console.log(pScore);
        //         whackMole(0);
        //     })
        //     return pScore;
        // } 








