import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';

class App extends React.Component {
  // outside the render


  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    console.error('mushrooms', mushrooms);
  }

  render() {
    return (
      <div className="App">
        <h2>MUSHROOM PICKERS</h2>
        <button className="btn btn-dark"><i className="fas fa-rocket"></i></button>
      </div>
    );
  }
}

export default App;
