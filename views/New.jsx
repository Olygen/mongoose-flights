const React = require('react');

const div = {
    textAlign: 'center',
    fontFamily: "Noto Sans, Arial, sans-serif",
    fontSize: '20px',
  }
  
  const header = {
    color: '#ffffff',
    backgroundColor: '#808080',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80px',
    marginBottom: '20px',
  };
  
  const form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const input = {
    borderRadius: '4px',
    padding: '8px',
    marginBottom: '8px',
    fontSize: '1rem',
  }
  
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
  }

  class New extends React.Component {
    render() {
      return (
        <div style={div}>
          <header style={header}>
            <h1>Input Form for Flights</h1>
          </header>
          <form style={form} action="/flights" method="POST">
            Airline:
            <input style={input} type="text" name="airline" />
            Flight Number:
            <input style={input} type="text" name="flightNo" />
            Departure:
            <input style={input} type="datetime-local" name="departs" />
            Airport:
            <select style={input} name="airport">
              <option value="AUS">Austin</option>
              <option value="DAL">Dallas</option>
              <option value="LAX">Los Angeles</option>
              <option value="SAN">San Diego</option>
              <option value="SEA">Seattle</option>
            </select>
            <input style={button} type="submit" value="Create Flight" />
          </form>
        </div>
      );
    }
  }
  
  module.exports = New;
