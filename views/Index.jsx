const React = require("react");

const header = {
  color: '#ffffff',
  background: 'linear-gradient(to bottom, #0000ff, #00ffff)',
  textAlign: 'center',
  fontFamily: "Noto Sans, Arial, sans-serif",
  paddingTop: "1px",
  paddingBottom: "10px",
  marginBottom: "30px"
};

const flightTable = {
  fontFamily: "Noto Sans, Arial, sans-serif",
  fontSize: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '1.5',
};

class Index extends React.Component {
  render() {
    const { flight } = this.props;
    return (
      <div>
        <header style={header}>
            <h1>All Flights</h1> 
        </header>
        <ul  style={flightTable}>
            {flight.map((flight, i) => {
                return (
                    <li key={i}>
                        <a href={`/flights/${flight._id}`}>
                        {flight.airline} 
                        Flight {flight.flightNo} - 
                        Departs: {new Date(flight.departs).toLocaleString()}
                        </a>{" "}
                    </li>                     
                );
            })}
        </ul>
            <a href="/flights/new">
            <h2 style={{textAlign: "center"}}>Want to add new flight?</h2>
            </a>
      </div>
    );
  }
};

module.exports = Index;

