import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default function TrackList(searchResults) {
  return (
    <div className="TrackList">
      {searchResults.tracks &&
        searchResults.tracks.map((track, i) => {
          // console.log(searchResults.tracks[i]);
          console.log(track);
          return (
            <div className="track" key={track.id}>
              <Track track={track} />
            </div>
          );
        })}
    </div>
  );
}
