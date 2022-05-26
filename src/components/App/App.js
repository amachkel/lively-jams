import './App.css';
import { React, useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
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

  // console.log(`playlistTracks: ${playlistTracks[0].name}`);
  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    const newPlaylistTracks = playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    setPlaylistTracks(newPlaylistTracks);
  };
  return (
    <div>
      <h1>Lively Jams</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            tracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}
