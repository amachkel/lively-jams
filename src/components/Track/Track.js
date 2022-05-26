import { React, useState } from 'react';
import './Track.css';

export default function Track(props) {
  const [isRemoval, setIsRemoval] = useState(false);
  console.log(props);
  const addTrack = (track) => {
    console.log(`addTrack called`);
    props.onAdd(track);
  };
  console.log(props.track);

  const renderAction = () => {
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    }
    return (
      <button className="Track-action" onClick={() => addTrack(props.track)}>
        +
      </button>
    );
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}
