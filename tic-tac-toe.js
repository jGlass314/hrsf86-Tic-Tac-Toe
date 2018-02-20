
class Board {
  constructor() {
    this.board = [
      [' ','|',' ','|',' '],
      ['-','-','-','-','-'],
      [' ','|',' ','|',' '],
      ['-','-','-','-','-'],
      [' ','|',' ','|',' ']
    ];
  }
  detectWin = (player) => {
    return (_detectVerticalWin(board) || _detectHorizontalWin(board) || _detectVerticalWin(board));
  }

  _detectVerticalWin = (player) => {
    return (board[0][0] === player.piece && board[2][0] === player.piece && board[4][0] === player.piece) ||
           (board[0][2] === player.piece && board[2][2] === player.piece && board[4][2] === player.piece) ||
           (board[0][4] === player.piece && board[2][4] === player.piece && board[4][4] === player.piece);
  }

  _detectHorizontalWin = (player) => {
    return (board[0][0] === player.piece && board[0][2] === player.piece && board[0][4] === player.piece) ||
           (board[2][0] === player.piece && board[2][2] === player.piece && board[2][4] === player.piece) ||
           (board[4][0] === player.piece && board[4][2] === player.piece && board[4][4] === player.piece);
  }

  _detectDiagonalWin = (player) => {
    return (board[0][0] === player.piece && board[2][2] === player.piece && board[4][4] === player.piece) ||
           (board[0][4] === player.piece && board[2][2] === player.piece && board[4][0] === player.piece);
  }

  isBoardFull = () => {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        if(this.board[i*2][j*2] === ' ') {
          return false;
        }
      }
    }
    return true;
  }
}

class Player {
  constructor(character) {
    this.piece = character;
  }
}

class Game {
  constructor(currentPlayer, alternatePlayer) {
    this.currentPlayer = currentPlayer;
    this.board = new Board();
    this.players = [currentPlayer, alternatePlayer];
  }

  play = (y, x) {
    if(this.board[y][x] === ' ') {
      this.board[y][x] = this.currentPlayer.piece;
      if(this.board.detectWin(currentPlayer)) {
        console.log(`${currentPlayer.piece} wins!!`);
        return;
      } else {
        if(this.board.isBoardFull()) {
          console.log('Stale Mate!');
          return;
        }
        // change players
        this.currentPlayer = (this.currentPlayer === this.players[0] ? this.players[1] : this.players[0]);
        console.log(`Player ${this.currentPlayer.piece}, you're up!`);
        // take input
        play(inputY, inputX);
      }
    } else {
      console.log(`Space already occupied by player ${this.board[y][x]}. Please try again`);
      // take input for same player
      play(inputY, inputX);
    }
  }
}

var startGame = () => {
  console.log('Welcome to tic-tac-toe!');
  console.log('Player 1, what\'s your character?');
  // get input for player1
  // check to make sure it's only 1 character long. if not, error and prompt again
  var player1 = new Player(input);
  console.log('Player 2, what\'s your character?');
  // get input for player2
  // check to make sure it's only 1 character long. if not, error and prompt again
  var player2 = new Player(input);
  var game = new Game(player1, player2);
  
}
