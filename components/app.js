var React = require('react')

module.exports = function App (props) {
  var name = props.name
  return (
    <div>
      <div>HELLO {name}</div>
      <button onClick={props.changeName}>Change Name</button>
    </div>
  )
}
