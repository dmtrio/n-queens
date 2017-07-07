/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

window.findSolution = function(){ };

window.findNRooksSolution = function (n) {

  // input is n
  // output is an array of the board solution

  // create a new board
  var board = new Board({'n': n});

  //recurse (row)
  var findSolution = function (row, board) {
    // if row = n
    if (row === n) {
      //end
      var answer = _.map(board.rows(), function (row) {
        return row.slice();
      });
      return answer;   
    }
    // set next rook in one of the available positions in row: togglePiece(row, i)
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
    // check if new rook causes confllicts
      if (!board.hasAnyRooksConflicts()) {
      //if no conflicts pass row[i+1] to recusion
        return findSolution(row + 1, board);
      }
      board.togglePiece(row, i);
    }
      // if conflicts 
  };

  return findSolution(0, board);
};



window.countNRooksSolutions = function(n) {

  // input is n
  // output is an array of the board solution

  // create a new board
  var board = new Board({'n': n});
  var solutionCount = 0;
  //recurse (row)
  var findSolution = function (row, board) {
    // if row = n
    if (row === n) {
      //end
      solutionCount++;
      return;
    }
    // set next rook in one of the available positions in row: togglePiece(row, i)
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
    // check if new rook causes confllicts
      if (!board.hasAnyRooksConflicts()) {
      //if no conflicts pass row[i+1] to recusion
        findSolution(row + 1, board);
      }
      board.togglePiece(row, i);
    }
      // if conflicts 
  };
  findSolution(0, board);
  console.log(solutionCount);
  return solutionCount;
  
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({'n': n});

  //recurse (row)
  var findSolution = function (row, board) {
    // if row = n
    if (row === n) {
      //end
      var answer = _.map(board.rows(), function (row) {
        return row.slice();
      });
      console.log('here?', answer, board);
      return answer;   
    }
    // set next rook in one of the available positions in row: togglePiece(row, i)
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
    // check if new rook causes confllicts
      if (!board.hasAnyQueensConflicts()) {
      //if no conflicts pass row[i+1] to recusion
        console.log('iterate', board);
        return findSolution(row + 1, board);
      }
      board.togglePiece(row, i);
    }
  };
  console.log(board)
  return findSolution(0, board);
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
