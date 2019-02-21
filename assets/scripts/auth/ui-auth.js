'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
  store.user = data.user
  $('#sign-out').show()
  $('#change-password').show()
  $('#get-games-button').show()
  $('#create-game-button').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password').hide()
  $('#get-games-button').hide()
  $('#create-game-button').hide()
  $('#user-message').hide()
  $('#sign-in').hide()
  $('.container').hide()
  $('#win-message').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  // console.error('changePasswordFailure ran. Error is :', error)
}
const createGameSuccess = function (data) {
  $('.container').show()
  $('#user-message').show()
  $('#win-message').text('')
  store.game = data.game
}

const onIndexSuccess = function (responseData) {
  $('#games-display').html(`Total Games Played: ${responseData.games.length}`)
  setTimeout(() => {
    $('#games-display').text('')
  }, 5000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  onIndexSuccess
}
