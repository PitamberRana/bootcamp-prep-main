// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  move: function (character, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null)
      this.board[rowNum][colNum] = character;

    return this.board;
  },

  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    return this.board;
  },
};
console.log(ticTacToe.move("x", 0, 0));
console.log(ticTacToe.move("x", 1, 1));
console.log(ticTacToe.move("x", 2, 2));
console.log(ticTacToe.clear());
