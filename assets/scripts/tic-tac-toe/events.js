// let user
// const player1 = 1
// const player2 = 2
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

const onClick0 = $('#box0').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[0] = currentPlayer
  takeTurn()
  console.log(gameBoard)
  console.log(event.target)
})
const onClick1 = $('#box1').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[1] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick2 = $('#box2').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[2] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick3 = $('#box3').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[3] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick4 = $('#box4').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[4] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick5 = $('#box5').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[5] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick6 = $('#box6').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[6] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick7 = $('#box7').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[7] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})
const onClick8 = $('#box8').on('click', (event) => {
  $(event.target).text(currentPlayer)
  gameBoard[8] = currentPlayer
  takeTurn()
  console.log(gameBoard)
})

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
