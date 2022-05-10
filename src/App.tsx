import React from 'react';
import './App.css';
import Game from './components/Game'

class App extends React.Component {
  componentDidMount() {
    console.log("App mounted")
  }

  render() {
    return (
      <div className="App" >
        <Game />
      </div>
    );
  }
}

export default App;
