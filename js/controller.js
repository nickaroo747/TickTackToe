angular
    .module("tictactoe")
    .controller("tictactoe", tictactoe);

tictactoe.$inject = ['$firebaseObject', '$firebaseArray']; //injected my controller with firebase

function tictactoe($firebaseObject, $firebaseArray){
    var self = this;
    self.scoretest1 = "PLAYER 1";
    self.scoretest2 = "PLAYER 2";
     
    self.runGame = runGame;
    self.gameObject = syncGameWithFirebase();
    self.gameObject.pepsiScore;

    // self.endGame = endGame;

    function syncGameWithFirebase(){
        var ref = new Firebase('https://cokevspepsi.firebaseio.com/tictactoe');
        var gameObject = $firebaseObject(ref);

        var pepsiScore = ""; // established pepsi's score is 0
        var cokeScore = ""; // established coke's score is 0

        var coke = ("images/cokesm.png");
        var pepsi = ("images/pepsism.png");
        var blank = ("images/blank.png");

        var playerturn = 0;

        //initialize values in the gameObject once it's loaded
        gameObject.$loaded(function(){

            gameObject.listholes = [ 
                { name: "1", image: "images/blank.png"},
                { name: "2", image: "images/blank.png"},
                { name: "3", image: "images/blank.png"},
                { name: "4", image: "images/blank.png"},
                { name: "5", image: "images/blank.png"},
                { name: "6", image: "images/blank.png"},
                { name: "7", image: "images/blank.png"},
                { name: "8", image: "images/blank.png"},
                { name: "9", image: "images/blank.png"}
            ] 
            gameObject.pepsiScore = "";
            gameObject.cokeScore = "";
            gameObject.playerturn = "";

            gameObject.$save();
        });

        return gameObject;
    }
    
    function pickSquare($index){
        
        if (self.pepsiScore == "Winner" || self.cokeScore == "Winner"){
            return;
        }

        if (self.gameObject.listholes[$index].image === "images/blank.png"){
            console.log('this is here');
            if (self.playerturn %2 !=0 ) {
            self.gameObject.listholes[$index].image = self.pepsi;
            self.gameObject.playerturn++;
            } else {
                self.gameObject.listholes[$index].image = self.coke;
                self.gameObject.playerturn++;
            }

            console.log(self.gameObject.playerturn);
            runGame();
        }
    }

    function runGame(){
        console.log("RunGame Ran");
        if (self.gameObject.listholes[0].image === self.gameObject.coke && self.gameObject.listholes[1].image === self.gameObject.coke && self.gameObject.listholes[2].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[3].image === self.gameObject.coke && self.gameObject.listholes[4].image === self.gameObject.coke && self.gameObject.listholes[5].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[6].image === self.gameObject.coke && self.gameObject.listholes[7].image === self.gameObject.coke && self.gameObject.listholes[8].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[0].image === self.gameObject.coke && self.gameObject.listholes[3].image === self.gameObject.coke && self.gameObject.listholes[6].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[1].image === self.gameObject.coke && self.gameObject.listholes[4].image === self.gameObject.coke && self.gameObject.listholes[7].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[2].image === self.gameObject.coke && self.gameObject.listholes[5].image === self.gameObject.coke && self.gameObject.listholes[8].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[0].image === self.gameObject.coke && self.gameObject.listholes[4].image === self.gameObject.coke && self.gameObject.listholes[8].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        if (self.gameObject.listholes[2].image === self.gameObject.coke && self.gameObject.listholes[4].image === self.gameObject.coke && self.gameObject.listholes[6].image === self.gameObject.coke){
            self.scoretest1 = "Winner";
            self.scoretest2 = "Loser";
            self.gameObject.cokeScore = "Winner";
        }

        //Pepsi Wins//

        if (self.gameObject.listholes[0].image === self.gameObject.pepsi && self.gameObject.listholes[1].image === self.gameObject.pepsi && self.gameObject.listholes[2].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[3].image === self.gameObject.pepsi && self.gameObject.listholes[4].image === self.gameObject.pepsi && self.gameObject.listholes[5].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[6].image === self.gameObject.pepsi && self.gameObject.listholes[7].image === self.gameObject.pepsi && self.gameObject.listholes[8].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[0].image === self.gameObject.pepsi && self.gameObject.listholes[3].image === self.gameObject.pepsi && self.gameObject.listholes[6].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[1].image === self.gameObject.pepsi && self.gameObject.listholes[4].image === self.gameObject.pepsi && self.gameObject.listholes[7].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[2].image === self.gameObject.pepsi && self.gameObject.listholes[5].image === self.gameObject.pepsi && self.gameObject.listholes[8].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[0].image === self.gameObject.pepsi && self.gameObject.listholes[4].image === self.gameObject.pepsi && self.gameObject.listholes[8].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }

        if (self.gameObject.listholes[2].image === self.gameObject.pepsi && self.gameObject.listholes[4].image === self.gameObject.pepsi && self.gameObject.listholes[6].image === self.gameObject.pepsi){
            self.scoretest2 = "Winner";
            self.scoretest1 = "Loser";
            self.gameObject.pepsiScore = "Winner";
        }
    }
}; // End of the function GuacamoleController($firebaseObject)
