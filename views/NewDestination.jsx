const React = require('react');
const DefaultLayout = require('./layout/Default');

const div = {
  textAlign: 'center',
  fontFamily: "Noto Sans, Arial, sans-serif",
  fontSize: '15px',
};
  
  const form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const input = {
    borderRadius: '4px',
    padding: '8px',
    marginBottom: '8px',
    fontSize: '1rem',
  };
  
  const button = {
    backgroundColor: '#808080',
    color: '#ffffff',
    borderRadius: '4px',
    padding: '8px 16px',
    // boxShadow: '2px 2px 4px rgba(0, 255, 255, 0.8)',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    marginTop: '20px',
  };


class NewDestination extends React.Component {
  render() {
    const { flight } = this.props;

    //To exclude the airports that have already been used 
    //by other destinations and/or the flight's airport, 
    //we need to pass the destinations array like the flight 
    //object to the NewDestination component, 
    //and then filter the options in the select tag.

    // const { flight, destinations } = this.props;
    // const usedAirports = [...destinations.map((destination) => destination.airport), flight.airport];
    // const availableAirports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'].filter(
    //   (airport) => !usedAirports.includes(airport)
    // );

    return (
    <div style={div}>
      <DefaultLayout>    
        <h1>New Destination for Flight {flight.number}</h1>
      <form style={form} action={`/flights/${flight._id}`} method="POST">
        
        Airport Code:
        <select style={input} name="airport">
          <option value="AUS">Austin</option>
          <option value="DAL">Dallas</option>
          <option value="LAX">Los Angeles</option>
          <option value="SAN">San Diego</option>
          <option value="SEA">Seattle</option>
        </select>
        Arrival Time:
        <input style={input} type="datetime-local" name="arrival" id="arrival"/>
        <input style={button} type="submit" value="Input Destination" />
      </form>
      </DefaultLayout>    
    </div>
    )
  }
};

module.exports = NewDestination;
