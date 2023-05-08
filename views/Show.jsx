const React = require('react');
const DefaultLayout = require('./layout/Default');

const styles = {
  div: {
    textAlign: 'center',
    fontFamily: "Noto Sans, Arial, sans-serif",
  },
  h: {
    fontSize: '25px',
    fontWeight: 'bold',
    lineHeight: '1.5',
    margin: '0 auto',
    width: '80%',
    paddingBottom: '20px',
  },
  p: {
    fontSize: '20px',
    lineHeight: '1.5',
    margin: '0 auto',
    width: '80%',
    // paddingBottom: '20px',
  },
};

class Show extends React.Component {
  render() {
    const flight = this.props.flight
    return (
      <div style={styles.div}>
      <DefaultLayout>
      <p style={styles.h}> 
        Flight details
      </p>
      <p style={styles.p}>Airline: {flight.airline}
      <br/>Flight No.: {flight.flightNo}
      <br/>Departs: {new Date(flight.departs).toLocaleString()}
      <br/>Airport: {flight.airport}
      <br/>Destinations:</p>
      {/* <ul> */}
      <table style={{ margin: '0 auto' }}>
        <tbody>
          {flight.destinations.map((destination, i) => (
            <tr key={i}>
              <td>Airport: {destination.airport}</td>
              <td>Arrival Time: {new Date(destination.arrival).toLocaleString()} ({destination.populate})</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </ul> */}
      <p style={styles.h}><a href={`/flights/${flight._id}/destinations/new`}>
      Add destinations
      </a></p>
      </DefaultLayout>
    </div>
    )
  }
}

module.exports = Show