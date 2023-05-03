const React = require("react");

const header = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textAlign: 'center',
  fontFamily: "Noto Sans, Arial, sans-serif",
  paddingTop: "1px",
  paddingBottom: "10px",
  marginBottom: "30px"
};

const mainPage = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

class Index extends React.Component {
  render() {
    const { flight } = this.props;
    return (
      <div>
        <header style={header}>
            <h1>All Flights</h1> 
        </header>
        <container  style={mainPage}>
            {flight.map((flight, i) => {
                return (
                    <div key={i}>
                        <a href={`/flights/${flight._id}`}>
                        {flight.airline} Flight {flight.flightNo}
                        </a>{" "}
                    </div>                     
                );
            })}
        </container>
            <a href="/flights/new">
            <h2 style={{textAlign: "center"}}>Want to add new flight?</h2>
            </a>
      </div>
    );
  }
};

module.exports = Index;

