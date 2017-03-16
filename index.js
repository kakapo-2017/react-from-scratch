var ReactDOM = require('react-dom')

var App = require('./components/app')

var state = {name: 'Weka'}

function changeName (ev) {
  state.name = 'kakapo'
  render()
}
state.changeName = changeName

var target = document.getElementById('main')

function render () {
  var view = App(state)
  ReactDOM.render(view, target)
}

render()
