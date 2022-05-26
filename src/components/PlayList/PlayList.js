import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

export default function PlayList(props) {
  console.log(`playlistTrack name: ${props.tracks[0].name}`);
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      <TrackList
        tracks={props.tracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
