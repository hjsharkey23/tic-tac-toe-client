// create function to display error messages, passed to events.js
// const dubClickError = () => {
//   $('#user-message').text('Error, space is taken!')
//   setTimeout(() => {
//     $('#user-message').text('')
//     $('#user-message').removeClass('Error, space is taken!')
//   }, 1500)
// }

const displayWinnerX = () => {
  $('#user-message').text('X wins!')
}

const displayWinnerO = () => {
  $('#user-message').text('O wins!')
}

const gameIsOver = () => {
  $('#user-message').text('Game is over, please reset the board!')
}

module.exports = {
  displayWinnerX,
  displayWinnerO,
  gameIsOver
}
