
const gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'O'

const takeTurn = () => {
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else {
    currentPlayer = 'O'
  }
  return currentPlayer
}

const checkWinner = () => {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
    (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
    (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    console.log('Winner!')
  } else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
    (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
    console.log('Winner!')
    // return winner then....
  } else {
    console.log('still playing')
  }
}
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const onClick0 = event => {
  if (board[0] === 0) {
    $(event.target).text(currentPlayer)
    board[0] += 1
    gameBoard[0] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick1 = event => {
  if (board[1] === 0) {
    $(event.target).text(currentPlayer)
    board[1] += 1
    gameBoard[1] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick2 = event => {
  if (board[2] === 0) {
    $(event.target).text(currentPlayer)
    board[2] += 1
    gameBoard[2] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}

const onClick3 = event => {
  if (board[3] === 0) {
    $(event.target).text(currentPlayer)
    board[3] += 1
    gameBoard[3] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick4 = event => {
  if (board[4] === 0) {
    $(event.target).text(currentPlayer)
    board[4] += 1
    gameBoard[4] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick5 = event => {
  if (board[5] === 0) {
    $(event.target).text(currentPlayer)
    board[5] += 1
    gameBoard[5] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick6 = event => {
  if (board[6] === 0) {
    $(event.target).text(currentPlayer)
    board[6] += 1
    gameBoard[6] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick7 = event => {
  if (board[7] === 0) {
    $(event.target).text(currentPlayer)
    board[7] += 1
    gameBoard[7] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}
const onClick8 = event => {
  if (board[8] === 0) {
    $(event.target).text(currentPlayer)
    board[8] += 1
    gameBoard[8] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  }
}

module.exports = {
  onClick0,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
  onClick6,
  onClick7,
  onClick8
}
