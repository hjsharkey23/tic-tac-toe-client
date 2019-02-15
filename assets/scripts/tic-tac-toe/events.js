
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
  } else {
    console.log('still playing')
  }
}

// const checkSpaces = () => {
//   if gameBoard[]
// }


const onClick0 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[0] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick1 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[1] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick2 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[2] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick3 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[3] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick4 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[4] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick5 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[5] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick6 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[6] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick7 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[7] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
}
const onClick8 = event => {
  $(event.target).text(currentPlayer)
  gameBoard[8] = currentPlayer
  takeTurn()
  checkWinner()
  console.log(gameBoard)
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
