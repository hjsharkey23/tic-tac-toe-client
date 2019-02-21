const ui = require('./ui.js')
const api = require('../auth/api-auth.js')
const uiAuth = require('../auth/ui-auth.js')
// const authEvents = require('../auth/events-auth.js')
// creates game board
let gameBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'X'

// alerts user who's turn it is
const whichTurn = () => {
  if (currentPlayer === 'X') {
    return $('#user-message').text('X: it is your turn')
  } else if (currentPlayer === 'O') {
    return $('#user-message').text('O: it is your turn')
  }
}
// displays turn before anything happens: default is 'X'
whichTurn()

// switches current player between x and o
const takeTurn = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  return currentPlayer
}

const dubClickError = () => {
  $('#user-message').text('Error, space is taken!')
  setTimeout(() => {
    $('#user-message').text('')
    $('#user-message').text(currentPlayer + ': it is your turn')
  }, 1500)
}

const gameOverError = () => {
  ui.gameIsOver()
}

// checks who the winner is, keeps track of whichTurn and runs displayWinnerO,
// or displayWinnerX if conditions are met
const checkWinner = () => {
  whichTurn()
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    ui.displayWinnerO()
  } else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X')) {
    ui.displayWinnerX()
  } else if ((gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
    ui.displayWinnerO()
  } else if (gameBoard.includes('') === false) {
    ui.gameIsDraw()
  }
}

const gameOver = () => {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X')) {
    return true
  } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
    return true
  } else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X')) {
    return true
  } else if ((gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')) {
    return true
  } else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')) {
    return true
  } else if ((gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    return true
  } else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    return true
  } else if ((gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    return true
  } else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X')) {
    return true
  } else if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')) {
    return true
  } else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X')) {
    return true
  } else if ((gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
    return true
  } else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    return true
  } else if ((gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    return true
  } else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X')) {
    return true
  } else if ((gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
    return true
  } else if (gameBoard.includes('') === false) {
    return true
  } else {
    return false
  }
}
// created board array to keep track of clicks
const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// click variables keep track of first clicks
// if statement checks if click has occured on space, then
// add click to counter, if it has already been clicked and value is set
// to 1 on click, runs dubClickError function to display error message.
// if no clicks have occured, and value is 0, it runs takeTurn and checkWinner
const onClick0 = event => {
  if (gameOver() === true &&
    board[0] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[0] === 0) {
    ui.gameIsDraw()
  } else if (board[0] === 0) {
    $(event.target).text(currentPlayer)
    board[0] += 1
    api.updateGame(0, currentPlayer, gameOver())
    gameBoard[0] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[0] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[0] === 1) {
    dubClickError()
  }
}
const onClick1 = event => {
  if (gameOver() === true &&
    board[1] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[1] === 0) {
    ui.gameIsDraw()
  } else if (board[1] === 0) {
    $(event.target).text(currentPlayer)
    board[1] += 1
    api.updateGame(1, currentPlayer, gameOver())
    gameBoard[1] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[1] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[1] === 1) {
    dubClickError()
  }
}
const onClick2 = event => {
  if (gameOver() === true &&
    board[2] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[2] === 0) {
    ui.gameIsDraw()
  } else if (board[2] === 0) {
    $(event.target).text(currentPlayer)
    board[2] += 1
    api.updateGame(2, currentPlayer, gameOver())
    gameBoard[2] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[2] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[2] === 1) {
    dubClickError()
  }
}

const onClick3 = event => {
  if (gameOver() === true &&
    board[3] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[3] === 0) {
    ui.gameIsDraw()
  } else if (board[3] === 0) {
    $(event.target).text(currentPlayer)
    board[3] += 1
    api.updateGame(3, currentPlayer, gameOver())
    gameBoard[3] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[3] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[3] === 1) {
    dubClickError()
  }
}
const onClick4 = event => {
  if (gameOver() === true &&
    board[4] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[4] === 0) {
    ui.gameIsDraw()
  } else if (board[4] === 0) {
    $(event.target).text(currentPlayer)
    board[4] += 1
    api.updateGame(4, currentPlayer, gameOver())
    gameBoard[4] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[4] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[4] === 1) {
    dubClickError()
  }
}
const onClick5 = event => {
  if (gameOver() === true &&
    board[5] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[5] === 0) {
    ui.gameIsDraw()
  } else if (board[5] === 0) {
    $(event.target).text(currentPlayer)
    board[5] += 1
    api.updateGame(5, currentPlayer, gameOver())
    gameBoard[5] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[5] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[5] === 1) {
    dubClickError()
  }
}
const onClick6 = event => {
  if (gameOver() === true &&
    board[6] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[6] === 0) {
    ui.gameIsDraw()
  } else if (board[6] === 0) {
    $(event.target).text(currentPlayer)
    board[6] += 1
    api.updateGame(6, currentPlayer, gameOver())
    gameBoard[6] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[6] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[6] === 1) {
    dubClickError()
  }
}
const onClick7 = event => {
  if (gameOver() === true &&
    board[7] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[7] === 0) {
    ui.gameIsDraw()
  } else if (board[7] === 0) {
    $(event.target).text(currentPlayer)
    board[7] += 1
    api.updateGame(7, currentPlayer, gameOver())
    gameBoard[7] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[7] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[7] === 1) {
    dubClickError()
  }
}
const onClick8 = event => {
  if (gameOver() === true &&
    board[8] === 0) {
    gameOverError()
  } else if (gameBoard.includes('') === false && gameOver() === true &&
    board[8] === 0) {
    ui.gameIsDraw()
  } else if (board[8] === 0) {
    $(event.target).text(currentPlayer)
    board[8] += 1
    api.updateGame(8, currentPlayer, gameOver())
    gameBoard[8] = currentPlayer
    takeTurn()
    checkWinner()
  } else if (board[8] === 1 &&
    gameOver() === true) {
    gameOverError()
  } else if (board[8] === 1) {
    dubClickError()
  }
}

const onCreateGame = function () {
  const formData = {}
  api.create(formData)
    .then(uiAuth.createGameSuccess)
    .catch(uiAuth.createGameFailure)
}

const resetBoard = () => {
  event.preventDefault()
  $('.box').text('')
  currentPlayer = 'X'
  whichTurn()
  board[0] = 0
  board[1] = 0
  board[2] = 0
  board[3] = 0
  board[4] = 0
  board[5] = 0
  board[6] = 0
  board[7] = 0
  board[8] = 0
  board[9] = 0
  gameBoard = ['', '', '', '', '', '', '', '', '']
  onCreateGame()
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
  onClick8,
  resetBoard
}
