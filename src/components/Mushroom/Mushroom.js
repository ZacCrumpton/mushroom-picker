import React from 'react';

import './Mushroom.scss';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

class Mushroom extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushroom } = this.props;
    return (
      <div className="Mushroom col-3">
        <div className="card" id={mushroom.id}>
          <img className="card-img-top shroomImg" src={mushroom.imgUrl} alt="Mushroom Card"></img>
          <div className="card-body">
          <h4>{mushroom.name}</h4>
          <p className="card-text">Color: {mushroom.color}</p>
          <p className="card-text">Description: {mushroom.description}</p>
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
