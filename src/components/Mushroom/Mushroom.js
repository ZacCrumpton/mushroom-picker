import React from 'react';

import './Mushroom.scss';

class Mushroom extends React.Component {
  render() {
    const { mushroom } = this.props;
    return (
      <div className="Mushroom col-3">
        <div className="card" id={mushroom.id}>
          <img className="card-img-top shroomImg" src={mushroom.imgUrl} alt="Mushroom Card"></img>
          <h4>{mushroom.name}</h4>
          <p className="card-text">Color: {mushroom.color}</p>
          <p className="card-text">Description: {mushroom.description}</p>
        </div>
      </div>
    );
  }
}

export default Mushroom;
