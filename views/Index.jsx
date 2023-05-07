const React = require("react");

const header = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 25%',
  color: '#ffffff',
  background: 'linear-gradient(to bottom, #0000ff, #00ffff)',
  fontFamily: "Noto Sans, Arial, sans-serif",
  paddingTop: "1px",
  paddingBottom: "10px",
  marginBottom: "30px"
};

const link = {
  color: '#ffffff'
};

const flightTable = {
  fontFamily: "Noto Sans, Arial, sans-serif",
  fontSize: '20px',
  lineHeight: '1.5',
  margin: '0 auto', // to center the table horizontally
  width: '80%',
};

class Index extends React.Component {
  render() {
    const { flight } = this.props;
    return (
      <div>
        <header style={header}>
            {/* <h1>All Flights</h1>  */}
            <a style={link} href="/flights">
            <h2>All Flights</h2>
            </a>
            <a style={link} href="/flights/new">
            <h2>Add flight</h2>
            </a>
        </header>
        <table style={flightTable}>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight No.</th>
              <th>Departs</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {flight
            .sort((a, b) => new Date(a.departs) - new Date(b.departs))
            .map((flight, i) => {
              const departs = new Date(flight.departs);
              const now = new Date();
              const isDeparted = departs < now;
              const rowStyle = isDeparted ? { color: 'red' } : {};
              return (
                <tr key={i} style={rowStyle}>
                  <td>{flight.airline}</td>
                  <td>{flight.flightNo}</td>
                  <td>{new Date(flight.departs).toLocaleString()}</td>
                  <td>
                    <a href={`/flights/${flight._id}`}>Details</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
            {/* <a href="/flights/new">
            <h2 style={{textAlign: "center"}}>Want to add new flight?</h2>
            </a> */}
      </div>
    );
  }
};

module.exports = Index;

