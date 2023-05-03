const React = require('react');

const div = {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const header = {
    color: '#ffffff',
    backgroundColor: '#808080',
  };
  
  const form = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const input = {
    borderRadius: '4px',
    padding: '8px',
    marginRight: '8px',
    fontSize: '1rem',
  }
  
  const button = {
    backgroundColor: '#d3d3d3',
    color: '#000000',
    borderRadius: '4px',
    padding: '8px 16px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
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
            <input style={button} type="submit" value="Create Flight" />
          </form>
        </div>
      );
    }
  }
  
  module.exports = New;
