import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default function PlayList(props) {
  // console.log(`playlistTrack name: ${props.tracks[0].name}`);

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={handleNameChange} />
      <TrackList
        tracks={props.tracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
