const React = require('react');

const div = {
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}

const header = {
  color: '#ffffff',
  backgroundColor: '#800080',
};

const React = require("react")

class Show extends React.Component {
  render() {
    const fruit = this.props.fruit
    return (
      <div style={div}>
        <h1> Show Page </h1>
          The {fruit.name} is {fruit.color} <br />
          {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
          <create>
            <a href="/flights">
            <h2 style={{textAlign: "center"}}>Home</h2>
            </a>
        </create>
      </div>
    )
  }
}

module.exports = Show