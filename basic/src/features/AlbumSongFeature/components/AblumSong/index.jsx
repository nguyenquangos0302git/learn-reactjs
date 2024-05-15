import React from 'react';
import PropTypes from 'prop-types';

AblumSong.propTypes = {
  song: PropTypes.object
}

AblumSong.defaultProps = {
  song: {}
}

function AblumSong(props) {
  const { song } = props;
  return (
    <li>
      <img src={song.thumbnail} alt={song.name}/>
      <p>{song.name}</p>
    </li>
  )
}

export default AblumSong;