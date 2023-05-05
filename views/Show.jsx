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
      <p>Airline: {flight.airline}</p>
      <p>Flight No.: {flight.flightNo}</p>
      <p>Departs: {new Date(flight.departs).toLocaleString()}</p>
      <p>Airport: {flight.airport}</p>
      <p>Destinations:</p>
      <ul>
        {flight.destinations.map((destination, i) => (
          <li key={i}>
            Airport: {destination.airport} - Arrival Time: {new Date(destination.arrival).toLocaleString()}
          </li>
        ))}
      </ul>
      <a href="/flights">
        <h2 style={{ textAlign: "center" }}>Home</h2>
      </a>
    </div>
    )
  }
}

module.exports = Show