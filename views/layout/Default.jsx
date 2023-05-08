const React = require('react');

const header = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 25%',
  color: '#ffffff',
  background: 'linear-gradient(to bottom, #0000ff, #00ffff)',
  fontFamily: 'Noto Sans, Arial, sans-serif',
  paddingTop: '1px',
  paddingBottom: '10px',
  marginBottom: '30px'
};

const link = {
  color: '#ffffff'
};

class DefaultLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header style={header}>
          <a style={link} href="/flights">
            <h2>All Flights</h2>
          </a>
          <a style={link} href="/flights/new">
            <h2>Add flight</h2>
          </a>
        </header>
        {children}
      </div>
    );
  }
}

module.exports = DefaultLayout;