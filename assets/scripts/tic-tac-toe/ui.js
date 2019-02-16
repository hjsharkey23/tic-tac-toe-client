
const dubClickError = () => {
  $('#double-click').text('Error, space is taken!')
  setTimeout(() => {
    $('#double-click').text('')
    $('#double-click').removeClass('Error, space is taken!')
  }, 1500)
}

module.exports = {
  dubClickError
}
