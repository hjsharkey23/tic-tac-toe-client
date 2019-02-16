const ui = require('./ui.js')
// creates game board
const gameBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'X'
// switches current player between x and o
const takeTurn = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  return currentPlayer
}
// checks for winning combinations
// const checkWinner = () => {
//   if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
//     (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
//     (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
//     (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') ||
//     (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
//     (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
//     (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
//     (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
//     console.log('Winner!')
//   } else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
//     (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
//     console.log('Winner!')
//     // return winner then....
//   } else {
//     console.log('still playing')
//   }
// }

const checkWinner = () => {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
    return ui.displayWinnerO()
  } else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X')) {
    return ui.displayWinnerX()
  } else if ((gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
    return ui.displayWinnerO()
    // return winner then....
  } else {
    console.log('still playing')
  }
}

// created board array to keep track of clicks
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// click variables keep track of first clicks
// if statement checks if click has occured on space, then
// add click to counter, if it has already been clicked and value is set
// to 1 on click, runs dubClickError function to display error message.
// if no clicks have occured, and value is 0, it runs takeTurn and checkWinner
const onClick0 = event => {
  if (board[0] === 0) {
    $(event.target).text(currentPlayer)
    board[0] += 1
    gameBoard[0] = currentPlayer
    takeTurn()
    checkWinner()
    console.log(gameBoard)
  } else if (board[0] === 1) {
    ui.dubClickError()
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
  } else if (board[1] === 1) {
    ui.dubClickError()
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
  } else if (board[2] === 1) {
    ui.dubClickError()
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
  } else if (board[3] === 1) {
    ui.dubClickError()
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
  } else if (board[4] === 1) {
    ui.dubClickError()
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
  } else if (board[5] === 1) {
    ui.dubClickError()
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
  } else if (board[6] === 1) {
    ui.dubClickError()
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
  } else if (board[7] === 1) {
    ui.dubClickError()
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
  } else if (board[8] === 1) {
    ui.dubClickError()
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
