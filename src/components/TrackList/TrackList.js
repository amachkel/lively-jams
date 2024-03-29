import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default function TrackList(props) {
  // console.log(props);

  return (
    <div className="TrackList">
      {props.tracks &&
        props.tracks.map((track, i) => {
          // console.log(searchResults.tracks[i]);
          // console.log(`mapping tracks: ${track.id}`);
          return (
            <div className="track">
              <Track
                key={track.id}
                track={track}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemoval={props.isRemoval}
              />
            </div>
          );
        })}
      {/* // : console.log('something went wrong') */}
    </div>
  );
}
