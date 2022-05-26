import { React, useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const search = (term) => {
    setSearchTerm(term);
  };

  const handleTermChange = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
}
