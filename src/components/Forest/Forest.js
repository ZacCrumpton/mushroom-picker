import React from 'react';
import './Forest.scss';
import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
  render() {
    const { mushrooms } = this.props;
    console.error('mushrooms?', this.props.mushrooms);
    const makeShrooms = mushrooms.map((mushroom) => (
      <Mushroom mushroom={mushroom}/>
    ));

    return (
      <div className="Forest d-flex flex-wrap">
        { makeShrooms }
      </div>
    );
  }
}

export default Forest;
