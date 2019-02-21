// create function to display error messages, passed to events.js
// const dubClickError = () => {
//   $('#user-message').text('Error, space is taken!')
//   setTimeout(() => {
//     $('#user-message').text('')
//     $('#user-message').removeClass('Error, space is taken!')
//   }, 1500)
// }

const displayWinnerX = () => {
  $('#win-message').text('X wins! Start a new game!')
  $('#user-message').text('')
}

const displayWinnerO = () => {
  $('#win-message').text('O wins! Start a new game!')
  $('#user-message').text('')
}

const gameIsOver = () => {
  $('#user-message').text('Game is over. Start a new game!')
}

const gameIsDraw = () => {
  $('#user-message').text('Draw! Start a new game!')
}

module.exports = {
  displayWinnerX,
  displayWinnerO,
  gameIsOver,
  gameIsDraw
}
