import { React, useState } from 'react';
import './Track.css';

export default function Track(track) {
  const [isRemoval, setIsRemoval] = useState(true);
  console.log(track.track);
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.track.name}</h3>
        <p>
          {track.track.artist} | {track.track.album}
        </p>
      </div>
      {isRemoval ? (
        <button className="Track-action">-</button>
      ) : (
        <button className="Track-action">+</button>
      )}
    </div>
  );
}
