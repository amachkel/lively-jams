import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

export default function SearchResults(props) {
  console.log(`searchResults: ${props.searchResults}`);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        // setSearchResults={setSearchResults}
        // onAdd={onAdd}
      />
    </div>
  );
}
