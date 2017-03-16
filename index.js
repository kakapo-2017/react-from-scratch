var React = require('react')
var ReactDOM = require('react-dom')


function App (props) {
  return (
    <div>HELLO WORLD</div>
  )

}

var target = document.getElementById('main')

function render() {
  var view = App()
  ReactDOM.render(view, target)
}

render()

