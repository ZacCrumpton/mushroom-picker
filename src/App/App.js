import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  // outside the render
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    const { mushrooms } = this.state;

    return (
      <div className="App">
        <h2>MUSHROOM PICKERS</h2>
        <div className="d-flex flex-wrap">
          <div>
            <Forest mushrooms={mushrooms}/>
            {
              // <Forest mushrooms={mushrooms} basket={basket}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
