import React from 'react';
import './Forest.scss';
import Mushroom from '../Mushroom/Mushroom';
import Basket from '../Basket/Basket';

class Forest extends React.Component {
  state = {
    basket: [],
  };

  pickEvent = (e) => {
    const { mushrooms } = this.props;
    e.preventDefault();
    const i = mushrooms.length;
    const myBasket = this.state.basket;
    const randomShroom = mushrooms[Math.floor(Math.random() * (i - 1))];
    console.error('rando shroom', randomShroom);
    if (randomShroom.isPoisonous) {
      myBasket.push(randomShroom);
    }
    // console.error('are you working button?!', myBasket);
    this.setState({ basket: myBasket }, console.error('state basket', this.state.basket));
  };

  render() {
    const { mushrooms } = this.props;
    // console.error('mushrooms?', this.props.mushrooms);
    const makeShrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div>
        <button className="btn btn-dark col-6" onClick={this.pickEvent}>Pick A Mushroom</button>
        <div className="Forest d-flex flex-wrap">
        { makeShrooms }

        </div>
        <Basket mushrooms={this.state.basket}/>
      </div>
    );
  }
}

export default Forest;
