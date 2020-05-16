import React from 'react';

import './Basket.scss';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { mushrooms } = this.props;
    // console.error('basket are you there?', mushrooms);
    const makeShrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div className="Basket d-flex flex-wrap basketBody">
        <h4>YOUR BASKET</h4>
      { makeShrooms }
      </div>
    );
  }
}

export default Basket;
