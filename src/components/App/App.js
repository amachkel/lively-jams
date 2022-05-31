import './App.css';
import { React, useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

export default function App() {
  const [searchResults, setSearchResults] = useState([
    // { name: 'Name 1', artist: 'artist 1', id: 1, album: 'album 1' },
  ]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // console.log(`playlistTracks: ${playlistTracks[0].name}`);
  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
    console.log(`playlistTracks: ${[...playlistTracks]}`);
    return playlistTracks;
  };

  const removeTrack = (track) => {
    const newPlaylistTracks = playlistTracks.filter(
      (currentTrack) => currentTrack.id !== track.id
    );
    setPlaylistTracks(newPlaylistTracks);
    return playlistTracks;
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
    return playlistName;
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
    return trackUris;
  };

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then((searchResults) => {
      setSearchResults(searchResults);
      return searchResults;
    });
  };

  return (
    <div>
      <h1>Lively Jams</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            tracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}
