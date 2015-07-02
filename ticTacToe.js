window.addEventListener('DOMContentLoaded', function() {

  var board = document.querySelector('#board'),
      boxes = document.querySelectorAll('.box'),
      reset = document.querySelector('#reset');
  
  var turn = "O";
  var moves = 0;
  var changeTurn = function() {
    if (turn === "O") {
      turn = "X";
    } else {
      turn = "O";
    }
  };

  var resetBoard = function() {
    for (var i = 0; i < boxes.length; i += 1) {
      boxes[i].innerText = "";

      boxes[i].className = "col-xs-4 box";
    }

    turn = "O";
    moves = 0;
  };
  var allThree = function(player, box1, box2, box3) {
    return (box1.innerText === player) && (box2.innerText === player) && (box3.innerText === player);
  };
  var winsDiagonal = function(player) {
    return allThree(player, boxes[0], boxes[4], boxes[8]) ||
           allThree(player, boxes[2], boxes[4], boxes[6]);
  };
  var winsColumn = function(player) {
    return allThree(player, boxes[0], boxes[3], boxes[6]) ||
           allThree(player, boxes[1], boxes[4], boxes[7]) ||
           allThree(player, boxes[2], boxes[5], boxes[8]);
  };
  var winsRow = function(player) {
    return allThree(player, boxes[0], boxes[1], boxes[2]) ||
           allThree(player, boxes[3], boxes[4], boxes[5]) ||
           allThree(player, boxes[6], boxes[7], boxes[8]);
  };
  var winnerIs = function(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
  };
  var getWinner = function() {
    if (winnerIs("O")) {
      return "O";
    }
    else if (winnerIs("X")) {
      return "X";
    }
    else {
      return null;
    }
  };

  for (var i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', function() {
      if (this.innerText === "") {
        this.innerText = turn;
        this.className += " " + turn;
        moves += 1;
        if (moves >= 5) {
          var winner = getWinner();
          if (winner) {
            alert("Player " + winner + " won!");
            resetBoard();
          } else {
            changeTurn();
          }
        } else {
          changeTurn();
        }
      }
    });
  }

reset.addEventListener('click', function () {
    resetBoard();
});

});
    //Step 1: Bind a click event to each box
    //Step 2: Change turn to either X or O based on who just went
    //Step 3: Add letter (either X or O) to the box you clicked on - using innerHTML
    //Step 4: After each turn, check if there is a win




