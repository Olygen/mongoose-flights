const React = require("react");
const DefaultLayout = require('./layout/Default');

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
        <DefaultLayout>
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
        </DefaultLayout>
      </div>
    );
  }
};

module.exports = Index;

