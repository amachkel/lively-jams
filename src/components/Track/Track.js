import { React, useState } from 'react';
import './Track.css';

export default function Track(track) {
  const [isRemoval, setIsRemoval] = useState(true);
  // const renderAction = () => {
  //   if (!isRemoval) {
  //     setIsRemoval(true);
  //     return <button>+</button>;
  //   }
  //   setIsRemoval(false);
  //   return <button>-</button>;
  // };
  return (
    <>
      {isRemoval ? (
        <div className="Track">
          <div className="Track-information">
            <h3>{track.name}</h3>
            <p>
              {track.artist} | {track.album}
            </p>
          </div>
          <button
            className="Track-action"
            onClick={() => setIsRemoval(!isRemoval)}
          >
            -
          </button>
        </div>
      ) : null}
    </>
  );
}
