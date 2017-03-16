var React = require('react')
var ReactDOM = require('react-dom')
var state = {name: 'Weka'}

function changeName(ev) {
  state.name = "kakapo"
  render()
}
function App (props) {
  var name = props.name
  return (
    <div>
      <div>HELLO {name}</div>
      <button onClick={changeName}>Change Name</button>
    </div>

  )
}

var target = document.getElementById('main')

function render() {
  var view = App(state)
  ReactDOM.render(view, target)
}

render()

