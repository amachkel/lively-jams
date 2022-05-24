import './App.css';
import { React, useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Name 1',
      artist: 'Artist 1',
      album: 'Album 1',
      id: 1,
    },
    {
      name: 'Name 2',
      artist: 'Artist 2',
      album: 'Album 2',
      id: 2,
    },
  ]);
  return (
    <div>
      <h1>Lively Jams</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
