import React from 'react';
import PropTypes from 'prop-types';
import AblumSong from '../AblumSong/index';

Ablumlist.propTypes = {
  listAblum: PropTypes.array,
}

Ablumlist.defaultProps = {
  listAblum: []
}

function Ablumlist(props) {
  const { listAblum } = props
  return (
    <ul>
      {
        listAblum.map(song => {
          return <AblumSong key={song.id} song={song}></AblumSong>
        })
      }
    </ul>
  )
}

export default Ablumlist;