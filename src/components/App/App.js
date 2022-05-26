import './App.css';
import { React, useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

export default function App(props) {
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Name 3',
      artist: 'Artist 3',
      album: 'Album 3',
      id: 3,
    },
  ]);
  const [playlistName, setPlaylistName] = useState('First Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
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

  console.log(`playlistTracks: ${playlistTracks[0].name}`);
  // const addTrack = (track) => {
  //   setPlaylistTracks((prev) =>
  //     prev.map((item) =>
  //       item.id === track.id ? setPlaylistTracks(track) : item
  //     )
  //   );
  // };
  return (
    <div>
      <h1>Lively Jams</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            // setSearchResults={setSearchResults}
            // onAdd={addTrack(searchResults.track)}
          />
          <Playlist playlistName={playlistName} tracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}
