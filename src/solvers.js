/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// Two objects with rows and columns
// key to say if available
// for each available position
// set and recurse

collectAvailable = function (matrix, coord, n) {
  avail = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i !== coord[0] && j !== coord[1]) {
        avail.push([i, j]);
      }
    }
  }
  return avail;
};

window.findNRooksSolution = function (n) {
  var matrix = new Array (n).fill(new Array(n).fill(0));
  var results = [];
  
  var innerFind = function (coord, startMatrix) {
    startMatrix = startMatrix[coord[0]][coord[1]] = 1;
    availStack = collectAvailable(startMatrix, coord, n);
    if (availStack.length) {
      innerFind(availStack.pop(), startMatrix);
    } else {
      results.push(startMatrix);
    }
  }; 
  
  for (var k = 0; k < n; k++) {
    for (var m = 0; m < n; m++) {
      innerFind([k, m], matrix);
    }
  }
  return results[0];
};
/*
window.findNRooksSolution = function(n, myboard) {
  
  var board = myboard || new Board({'n': n});
  
  for (var key in board.attributes) {
    for (var i = 0; i < board.attributes[key].length; i++) {
      board.setCoordinates(key, i, 1);
      if (board.hasAnyColConflicts() || board.hasAnyRowConflicts()) {
        board.setCoordinates(key, i, 0);
      }
    }
  }
  
  var solutionArray = [];
  for (var key in board.attributes) {
    if (key !== 'n') {
      solutionArray.push(board.attributes[key]);
    }
  }
  
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionArray));
  return solutionArray;
};

*/

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var boardsArray = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var board = new Board({'n': n});
      board.setCoordinates(i, j, 1);
      var matrix = findNRooksSolution(n, board);
      var sum = matrix.reduce (function(a, b) { return a + b.reduce(function(a, b) { return a + b; }); }, 0);
      if (sum === n && !_.any(boardsArray, function (submatrix) { 
        console.log(board.matricesAreEqual (submatrix, matrix));
        return board.matricesAreEqual (submatrix, matrix); 
      })) {
        boardsArray.push(matrix);
      }
    }    
  }
  
  console.log('Number of solutions for ' + n + ' rooks:', boardsArray.length);
  console.log(boardsArray);
  return boardsArray.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
