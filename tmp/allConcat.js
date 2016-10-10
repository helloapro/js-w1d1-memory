// var Card = require('./../js/memory.js').memoryModule;

$(document).ready(function() {
  $('#card-board').click(function() {
    event.preventDefault();
    // var newGame = new Card();

    document.getElementById("james1").onclick = function() {
    document.getElementById("jamesimage").style.visibility = "visible";
    }
  });
});

//write for cards facing down
//user can only click on 2 cards
//if users slected cards are different, return face down
//when all cards are up, game ends
