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
    backgroundColor: '#fcd307',
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
                  <h1>Let's see how do you remember pokemon!</h1>
                  </header>;
                <form style={form} action="/pokemon" method="POST">
                    Name: <input style={input} type="text" name="name" />
                    <input style={button} type="submit" value="Create Pokemon" />       
                </form>
                <create>
                  <a href="/pokemon/allnames">
                  <h2 style={{textAlign: "center"}}>Get a hint</h2>
                  </a>
                </create>
            </div>
        )
      }
};

module.exports = New;
