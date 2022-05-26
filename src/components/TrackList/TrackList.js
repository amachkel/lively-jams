import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default function TrackList(props) {
  console.log(props.tracks);

  return (
    <div className="TrackList">
      {props.tracks &&
        props.tracks.map((track, i) => {
          // console.log(searchResults.tracks[i]);
          console.log(`mapping tracks: ${track.id}`);
          return (
            <div className="track" key={track.id}>
              <Track
                track={track}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemoval={props.isRemoval}
                // setSearchResults={setSearchResults}
              />
            </div>
          );
        })}
      {/* // : console.log('something went wrong') */}
    </div>
  );
}
