'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./tic-tac-toe/events.js')
const authEvents = require('./auth/events-auth.js')
//
// // use require without a reference to ensure a file is bundled
// // require('./example')
//
$(() => {
  $('#box0').on('click', events.onClick0)
  $('#box1').on('click', events.onClick1)
  $('#box2').on('click', events.onClick2)
  $('#box3').on('click', events.onClick3)
  $('#box4').on('click', events.onClick4)
  $('#box5').on('click', events.onClick5)
  $('#box6').on('click', events.onClick6)
  $('#box7').on('click', events.onClick7)
  $('#box8').on('click', events.onClick8)
  $('#create-game-button').on('submit', events.resetBoard)
  authEvents.addHandlers()
})
