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

class Show extends React.Component {
  render() {
    const flight = this.props.flight
    return (
      <div style={div}>
        <h1> Show Page </h1>
        {flight.airline} 
                      Flight {flight.flightNo} - 
                      Departs: {new Date(flight.departs).toLocaleString()}
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